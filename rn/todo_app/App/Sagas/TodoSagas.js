import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import TodoActions from '../Redux/TodoRedux'

export function * getAllLists (api, action) {
  const response = yield call(api.getAllLists)

  if (response.ok) {
    const lists = path(['data', 'results'], response)
    yield put(TodoActions.allListsSuccess(lists))
  } else {
    yield put(TodoActions.requestError())
  }
}
