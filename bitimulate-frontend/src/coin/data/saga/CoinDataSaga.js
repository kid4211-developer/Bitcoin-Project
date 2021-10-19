import { takeEvery, select } from 'redux-saga/effects'
import { createRequestSaga } from '../../common/util/createRequestSaga'
import * as type from '../action//CoinDataActionType'
import * as coinApi from '../api/index'
import * as candleDataUtils from '../../common/lib/candleDataUtils'
import * as orderbookUtils from '../../common/lib/orderbookUtils'
import * as tradeListUtils from '../../common/lib/tradeListUtils'
import createConnectSocketSaga from '../../common/util/createConnectSocketSaga'
import { createChangeOptionSaga } from '../../common/util/createChangeOptionSaga'
import moment from 'moment-timezone'

const getMarketNameSaga = createRequestSaga(type.GET_MARKET_NAMES, coinApi.getMarketCodes, candleDataUtils.marketNames)

// 'KRW' Coin Market candle의 일봉 한 개씩 가져옮
const getInitCandleSaga = createRequestSaga(type.GET_INIT_CANDLES, coinApi.getInitCanldes, candleDataUtils.init)

// 선택한 coin - market의 거래 호가창 요청
const getInitOrderbookSaga = createRequestSaga(type.GET_INIT_ORDERBOOK, coinApi.getInitOrderbooks, orderbookUtils.init)

// 거래 체결 내역 n개 가져오기
const getOneCoinTradeListsSaga = createRequestSaga(
    type.GET_ONE_COIN_TRADELISTS,
    coinApi.getOneCoinTradeLists,
    tradeListUtils.init
)

const getOneCoinCandlesSaga = createRequestSaga(type.GET_ONE_COIN_CANDLES, coinApi.getOneCoinCandles, candleDataUtils.oneCoin)

// 호가창 웹소켓 연결 Thunk
const connectOrderbookSocketSaga = createConnectSocketSaga(type.CONNECT_ORDERBOOK_SOCKET, 'orderbook', orderbookUtils.update)

// 체결 내역 웹소켓 연결 Thunk
const connectTradeListSocketSaga = createConnectSocketSaga(type.CONNECT_TRADELIST_SOCKET, 'trade', tradeListUtils.update)

// Candle 웹 소켓 연결 Saga
const connectCandleSocketSaga = createConnectSocketSaga(type.CONNECT_CANDLE_SOCKET, 'ticker', candleDataUtils.updates)

// 선택한 타임 타입(ex.5분봉 할때 '분') 변경하기 Saga
const changeSelectedTimeTypeSaga = createChangeOptionSaga(type.CHANGE_TIME_TYPE)

// 선택한 타임 카운트(ex.5분봉 할때 '5') 변경하기 Saga
const changeSelectedTimeCountSaga = createChangeOptionSaga(type.CHANGE_TIME_COUNT)

const getAdditionalCoinCandlesSaga = createRequestSaga(
    type.GET_ADDITIONAL_COIN_CANDLES,
    coinApi.getAdditionalCoinCandles,
    candleDataUtils.add
)

//시작시 coin data 초기화 작업
function* startInitSaga() {
    yield getMarketNameSaga() // Upbit에서 제공하는 (Coin / Market) 이름들 가져오기

    const state = yield select()
    const marketNames = Object.keys(state.Coin.marketNames.data) //가상화폐 market-name Code명 (key 배열)
    const selectedMarket = state.Coin.selectedMarket
    const selectedTimeType = state.Coin.selectedTimeType
    const selectedTimeCount = state.Coin.selectedTimeCount

    yield getInitCandleSaga({ payload: marketNames }) // Coin Candle 초기값 요청
    yield getInitOrderbookSaga({ payload: selectedMarket }) // 'KRW - BTC' 초기 호가창 요청
    yield getOneCoinTradeListsSaga({ payload: selectedMarket }) // 'KRW - BTC' 거래 체결 내역 요청
    yield getOneCoinCandlesSaga({
        payload: {
            coin: selectedMarket,
            timeType: selectedTimeType,
            timeCount: selectedTimeCount,
        },
    })

    yield connectOrderbookSocketSaga({ payload: marketNames }) // OrderBook Socket 연결
    yield connectTradeListSocketSaga({ payload: marketNames }) // TradeList Socket 연결
    yield connectCandleSocketSaga({ payload: marketNames }) // Candle Socket 연결
}

function* changeTimeTypeAndDataSaga(action) {
    const state = yield select()
    const selectedMarket = state.Coin.selectedMarket
    const selectedTimeType = state.Coin.selectedTimeType
    const selectedTimeCount = state.Coin.selectedTimeCount

    const newTimeType = action.payload.timeType
    const newTimeCount = action.payload.timeCount

    if (selectedTimeType === newTimeType && selectedTimeCount === newTimeCount) return

    yield changeSelectedTimeTypeSaga({ payload: newTimeType })
    yield changeSelectedTimeCountSaga({ payload: newTimeCount })

    yield getOneCoinCandlesSaga({
        payload: {
            coin: selectedMarket,
            timeType: newTimeType,
            timeCount: newTimeCount,
        },
    })
}

function* startAddMoreCandleDataSaga() {
    const state = yield select()
    const selectedMarket = state.Coin.selectedMarket
    const selectedTimeType = state.Coin.selectedTimeType
    const selectedTimeCount = state.Coin.selectedTimeCount

    const isLoading = state.Loading[type.GET_ADDITIONAL_COIN_CANDLES]

    if (isLoading) return
    const datetime = moment(state.Coin.candle.data[selectedMarket].candles[0].date).utc().format('YYYY-MM-DDTHH:mm') + ':00Z'

    yield getAdditionalCoinCandlesSaga({
        payload: {
            coin: selectedMarket,
            timeType: selectedTimeType,
            timeCount: selectedTimeCount,
            datetime,
        },
    })
}

function* coinSaga() {
    yield takeEvery(type.START_INIT, startInitSaga)
    yield takeEvery(type.GET_INIT_CANDLES, getInitCandleSaga)
    yield takeEvery(type.GET_INIT_ORDERBOOK, getInitOrderbookSaga)
    yield takeEvery(type.GET_ONE_COIN_TRADELISTS, getOneCoinTradeListsSaga)
    yield takeEvery(type.GET_ONE_COIN_CANDLES, getOneCoinCandlesSaga)
    yield takeEvery(type.CONNECT_CANDLE_SOCKET, connectCandleSocketSaga) // Candle - Socket
    yield takeEvery(type.CONNECT_ORDERBOOK_SOCKET, connectOrderbookSocketSaga) // OrderBook - Socket
    yield takeEvery(type.CONNECT_TRADELIST_SOCKET, connectTradeListSocketSaga) // TradeList - Socket
    yield takeEvery(type.CHANGE_TIME_TYPE_AND_DATA, changeTimeTypeAndDataSaga)
    yield takeEvery(type.START_ADD_MORE_CANDLE_DATA, startAddMoreCandleDataSaga)
}

export default coinSaga
