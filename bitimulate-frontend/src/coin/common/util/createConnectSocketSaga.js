import { w3cwebsocket as W3CWebSocket } from 'websocket'
import { buffers, eventChannel, END } from 'redux-saga'
import { call, put, select, flush, delay } from 'redux-saga/effects'
import encoding from 'text-encoding'

// 소켓 만들기
const createSocket = () => {
    const client = new W3CWebSocket('wss://api.upbit.com/websocket/v1')
    client.binaryType = 'arraybuffer'

    return client
}

// 소켓 연결용
const connectSocekt = (socket, connectType, action, buffer) => {
    // console.log('connectSocekt action :', action)
    return eventChannel((emit) => {
        socket.onopen = () => {
            socket.send(JSON.stringify([{ ticket: 'downbit-clone' }, { type: connectType, codes: action.payload }]))
        }

        socket.onmessage = (evt) => {
            const enc = new encoding.TextDecoder('utf-8')
            // const arr = new Uint8Array(evt.data);
            const data = JSON.parse(enc.decode(evt.data))

            emit(data)
        }

        socket.onerror = (evt) => {
            emit(evt)
            emit(END)
        }

        const unsubscribe = () => {
            socket.close()
        }

        return unsubscribe
    }, buffer || buffers.none())
}
/* call(func, param, param ...) - 첫번째 파라미터 : 함수 / 나머지 파라미터 : 함수에 전달할 인자값
 *                              - 즉, 주어진 함수를 실행하는 함수
 * put({type : 'INCREMENT'}) - 특정 액션을 dispatch
 *                           - 즉, store에 인자로 들어온 action을 dispatch 하는 함수
 * */

// 웹소켓 연결용 사가 - 일정 시간동안 수신된 Data를 buffer에 쌓아두고 중복되는 data는 제거
const createConnectSocketSaga = (type, connectType, dataMaker) => {
    const SUCCESS = `${type}_SUCCESS`
    const ERROR = `${type}_ERROR`
    console.log('soket request name', type)
    console.log('connectType', connectType)
    return function* (action = {}) {
        const client = yield call(createSocket)
        console.log('client Socket', client)
        const clientChannel = yield call(
            // connectSocekt 함수에 (client, connectType, action, buffers.expanding(500)) 총 4개의 인자 전달
            connectSocekt,
            client,
            connectType,
            action,
            buffers.expanding(500)
        )

        try {
            while (true) {
                const datas = yield flush(clientChannel) // 버퍼 데이터 가져오기
                // console.log('createConnectSocketSaga type :', type)
                // console.log('createConnectSocketSaga flush :', datas)
                const state = yield select()

                if (datas.length) {
                    const sortedObj = {}
                    datas.forEach((data) => {
                        if (sortedObj[data.code]) {
                            // 버퍼에 있는 데이터중 시간이 가장 최근인 데이터만 남김
                            sortedObj[data.code] = sortedObj[data.code].timestamp > data.timestamp ? sortedObj[data.code] : data
                        } else {
                            sortedObj[data.code] = data // 새로운 데이터면 그냥 넣음
                        }
                    })

                    const sortedData = Object.keys(sortedObj).map((data) => sortedObj[data])

                    yield put({ type: SUCCESS, payload: dataMaker(sortedData, state) })
                }
                yield delay(5000) // 500ms 동안 대기
            }
        } catch (e) {
            yield put({ type: ERROR, payload: e })
        } finally {
            clientChannel.close() // emit(END) 접근시 소켓 닫기
        }
    }
}

export default createConnectSocketSaga
