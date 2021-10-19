import { all } from '@redux-saga/core/effects'
import coinSaga from '../../data/saga/CoinDataSaga'

function* RootSaga() {
    yield all([coinSaga()])
}

export default RootSaga
