import * as type from './CoinDataActionType'

export const startInit = () => ({ type: type.START_INIT })

export const connectCandleSocket = (marketNames) => ({
    type: type.CONNECT_CANDLE_SOCKET,
    payload: marketNames,
})

export const connetOrderbookSocket = (marketNames) => ({
    type: type.CONNECT_ORDERBOOK_SOCKET,
    payload: marketNames,
})

export const connectTradeListSocket = (marketNames) => ({
    type: type.CONNECT_TRADELIST_SOCKET,
    payload: marketNames,
})

// 차트 시간 데이터 변경하고 데이터 받기
export const changeTimeTypeAndData = (timeTypeAndCount) => ({
    type: type.CHANGE_TIME_TYPE_AND_DATA,
    payload: timeTypeAndCount,
})

// 추가적인 Candle Data 받기
export const startAddMoreCandleData = () => ({ type: type.START_ADD_MORE_CANDLE_DATA })
