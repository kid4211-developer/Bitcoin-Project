import { handleActions } from 'redux-actions'

const START_LOADING = 'loading/START_LOADING'
const FINISH_LOADING = 'loading/FINISH_LOADING'

export const startLoading = (payload) => ({
    type: START_LOADING,
    payload,
})

export const finishLoading = (payload) => ({
    type: FINISH_LOADING,
    payload,
})

const initialState = {
    'coin/GET_ONE_COIN_CANDLES': true,
    'coin/GET_INIT_ORDERBOOK': true,
    'coin/GET_ONE_COIN_TRADELISTS': true,
    'coin/GET_INIT_CANDLES': true,
    'coin/GET_MARKET_NAMES': true,
    'coin/GET_ADDITIONAL_COIN_CANDLES': false,
}

export const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
    initialState
)
