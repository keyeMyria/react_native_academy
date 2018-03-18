import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import TodoActions from '../Redux/TodoRedux'

export function * getAllLists (api) {
  const response = yield call(api.getAllLists)

  if (response.ok) {
    const lists = path(['data', 'results'], response)
    yield put(TodoActions.allListsSuccess(lists))
  } else {
    yield put(TodoActions.requestError())
  }
}

export function * toggleCompleted (api, { listId, itemId, completed }) {
  const response = yield call(api.updateTodoItem, listId, itemId, { completed })

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield put(TodoActions.requestError())
  }
}
