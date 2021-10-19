import { combineReducers } from 'redux'
import coinDataReducer from '../../data/reducer/CoinDataReducer'
import { loading } from '../util/loadingUtil'

const RootReducer = combineReducers({
    Coin: coinDataReducer,
    Loading: loading,
})

export default RootReducer
