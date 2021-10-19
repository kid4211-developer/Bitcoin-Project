import { changeOptionActions } from '../../common/util/changeOptionActions'
import requestActions from '../../common/util/requestActions'
import requestInitActions from '../../common/util/requestInitActions'
import * as type from '../action/CoinDataActionType'
import coinDataInitialState from './CoinInitialState'

// coinDataInitialState : 코인 초기값
const coinDataReducer = (state = coinDataInitialState, action) => {
    switch (action.type) {
        // Coin Market Names 셋팅
        case type.GET_MARKET_NAMES_SUCCESS:
        case type.GET_MARKET_NAMES_ERROR:
            return requestActions(type.GET_MARKET_NAMES, 'marketNames')(state, action)

        // 초기 캔들
        case type.GET_INIT_CANDLES_SUCCESS:
        case type.GET_INIT_CANDLES_ERROR:
            return requestInitActions(type.GET_INIT_CANDLES, 'candle')(state, action)

        // 호가창 초기값
        case type.GET_INIT_ORDERBOOK_SUCCESS:
        case type.GET_INIT_ORDERBOOK_ERROR:
            return requestActions(type.GET_INIT_ORDERBOOK, 'orderbook')(state, action)

        // 체결내역 200개 초기값
        case type.GET_ONE_COIN_TRADELISTS_SUCCESS:
        case type.GET_ONE_COIN_TRADELISTS_ERROR:
            return requestActions(type.GET_ONE_COIN_TRADELISTS, 'tradeList')(state, action)

        // 코인 한 개 정해서 200개
        case type.GET_ONE_COIN_CANDLES_SUCCESS:
        case type.GET_ONE_COIN_CANDLES_ERROR:
            return requestActions(type.GET_ONE_COIN_CANDLES, 'candle')(state, action)

        // 호가창 실시간 정보
        case type.CONNECT_ORDERBOOK_SOCKET_SUCCESS:
        case type.CONNECT_ORDERBOOK_SOCKET_ERROR:
            return requestActions(type.CONNECT_ORDERBOOK_SOCKET, 'orderbook')(state, action)

        // 체결내역 실시간 정보
        case type.CONNECT_TRADELIST_SOCKET_SUCCESS:
        case type.CONNECT_TRADELIST_SOCKET_ERROR:
            return requestActions(type.CONNECT_TRADELIST_SOCKET, 'tradeList')(state, action)

        // 캔들 실시간 정보
        case type.CONNECT_CANDLE_SOCKET_SUCCESS:
        case type.CONNECT_CANDLE_SOCKET_ERROR:
            return requestActions(type.CONNECT_CANDLE_SOCKET, 'candle')(state, action)

        case type.CHANGE_TIME_TYPE_SUCCESS:
            return changeOptionActions(type.CHANGE_TIME_TYPE, 'selectedTimeType')(state, action)
        case type.CHANGE_TIME_COUNT_SUCCESS:
            return changeOptionActions(type.CHANGE_TIME_COUNT, 'selectedTimeCount')(state, action)

        // 추가 코인 데이터 로드
        case type.GET_ADDITIONAL_COIN_CANDLES_SUCCESS:
        case type.GET_ADDITIONAL_COIN_CANDLES_ERROR:
            return requestActions(type.GET_ADDITIONAL_COIN_CANDLES, 'candle')(state, action)
        default:
            return state
    }
}

export default coinDataReducer
