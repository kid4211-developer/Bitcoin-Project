import { w3cwebsocket as W3CWebSocket } from 'websocket'
import encoding from 'text-encoding'

// 웹소켓 연결용 Thunk
export const createConnectSocketThunk = (type, connectType, dataMaker) => {
    const SUCCESS = `${type}_SUCCESS`
    const ERROR = `${type}_ERROR`

    return (action = {}) => (dispatch, getState) => {
        const client = new W3CWebSocket('wss://api.upbit.com/websocket/v1')
        client.binaryType = 'arraybuffer'

        client.onopen = () => {
            client.send(
                JSON.stringify([
                    { ticket: 'downbit-clone' },
                    { type: connectType, codes: action.payload },
                ])
            )
        }

        client.onmessage = (event) => {
            const enc = new encoding.TextDecoder('utf-8')
            const arr = new Uint8Array(event.data)
            const data = JSON.parse(enc.decode(arr))
            const state = getState()

            dispatch({ type: SUCCESS, payload: dataMaker(data, state) })
        }

        client.onerror = (error) => {
            dispatch({ type: ERROR, payload: error })
        }
    }
}
