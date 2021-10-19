import { createRequestActionTypes } from '../../common/util/createRequestActionTypes'

// Coin Data 요청 시작
export const START_INIT = 'coin/START_INIT'

// Candle Data 요청
export const START_ADD_MORE_CANDLE_DATA = 'coin/START_ADD_MORE_CANDLE_DATA'

export const [GET_MARKET_NAMES, GET_MARKET_NAMES_SUCCESS, GET_MARKET_NAMES_ERROR] = createRequestActionTypes(
    'coin/GET_MARKET_NAMES'
)

export const [GET_INIT_CANDLES, GET_INIT_CANDLES_SUCCESS, GET_INIT_CANDLES_ERROR] = createRequestActionTypes(
    'coin/GET_INIT_CANDLES'
)

export const [GET_INIT_ORDERBOOK, GET_INIT_ORDERBOOK_SUCCESS, GET_INIT_ORDERBOOK_ERROR] = createRequestActionTypes(
    'coin/GET_INIT_ORDERBOOK'
)

export const [GET_ONE_COIN_TRADELISTS, GET_ONE_COIN_TRADELISTS_SUCCESS, GET_ONE_COIN_TRADELISTS_ERROR] = createRequestActionTypes(
    'coin/GET_ONE_COIN_TRADELISTS'
)

export const [GET_ONE_COIN_CANDLES, GET_ONE_COIN_CANDLES_SUCCESS, GET_ONE_COIN_CANDLES_ERROR] = createRequestActionTypes(
    'coin/GET_ONE_COIN_CANDLES'
)

export const [
    CONNECT_ORDERBOOK_SOCKET,
    CONNECT_ORDERBOOK_SOCKET_SUCCESS,
    CONNECT_ORDERBOOK_SOCKET_ERROR,
] = createRequestActionTypes('coin/CONNECT_ORDERBOOK_SOCKET')

export const [
    CONNECT_TRADELIST_SOCKET,
    CONNECT_TRADELIST_SOCKET_SUCCESS,
    CONNECT_TRADELIST_SOCKET_ERROR,
] = createRequestActionTypes('coin/CONNECT_TRADELIST_SOCKET')

export const [CONNECT_CANDLE_SOCKET, CONNECT_CANDLE_SOCKET_SUCCESS, CONNECT_CANDLE_SOCKET_ERROR] = createRequestActionTypes(
    'coin/CONNECT_CANDLE_SOCKET'
)

export const [
    GET_ADDITIONAL_COIN_CANDLES,
    GET_ADDITIONAL_COIN_CANDLES_SUCCESS,
    GET_ADDITIONAL_COIN_CANDLES_ERROR,
] = createRequestActionTypes('coin/GET_ADDITIONAL_COIN_CANDLES')

/* Coin 선택에 대한 Option 변경 Action */
export const CHANGE_TIME_TYPE_AND_DATA = 'coin/CHANGE_TIME_TYPE_AND_DATA'

/* Chart time type 변경 */
export const CHANGE_TIME_TYPE = 'coin/CHANGE_TIME_TYPE'
export const CHANGE_TIME_TYPE_SUCCESS = 'coin/CHANGE_TIME_TYPE_SUCCESS'

/* Chart time 치수 변경 */
export const CHANGE_TIME_COUNT = 'coin/CHANGE_TIME_COUNT'
export const CHANGE_TIME_COUNT_SUCCESS = 'coin/CHANGE_TIME_COUNT_SUCCESS'
