import { call, put, select } from 'redux-saga/effects'
import { finishLoading, startLoading } from './loadingUtil'

export const createRequestSaga = (type, request, dataMaker) => {
    const SUCCESS = `${type}_SUCCESS`
    const ERROR = `${type}_ERROR`

    return function* (action = {}) {
        yield put(startLoading(type))
        try {
            console.log('createRequestSaga action:', action)
            const response = yield call(request, action.payload)
            const state = yield select()
            console.log('createRequestSaga response :', response)
            yield put({ type: SUCCESS, payload: dataMaker(response.data, state) })
            yield put(finishLoading(type))
        } catch (error) {
            yield put({ type: ERROR, payload: error })
            yield put(finishLoading(type))
            throw error
        }
    }
}
