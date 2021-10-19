import { put } from 'redux-saga/effects'

// 선택 옵션 변경용 사가
export const createChangeOptionSaga = (type) => {
    const SUCCESS = `${type}_SUCCESS`

    return function* (action = {}) {
        console.log('createChangeOptionSaga ACTION :', action)
        yield put({ type: SUCCESS, payload: action.payload })
    }
}
