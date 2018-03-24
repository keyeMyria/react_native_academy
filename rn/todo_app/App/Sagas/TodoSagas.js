import { select, call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import TodoActions, { getToken } from '../Redux/TodoRedux'
import NavigationActions from 'react-navigation/src/NavigationActions'

export function * register (api, {username, password, email}) {
  const response = yield call(api.register, username, password, email)

  if (response.ok) {
    yield put(TodoActions.registerSuccess())
    // Navigates to login screen, user has to log in before using the App
    const nav = NavigationActions.navigate({ routeName: 'LaunchScreen' })
    yield put(nav)
  } else {
    yield _handleErrors(response)
  }
}

export function * login (api, {username, password}) {
  const response = yield call(api.login, username, password)

  if (response.ok) {
    const jwtToken = path(['data', 'token'], response)
    yield put(TodoActions.loginSuccess(jwtToken))
  } else {
    yield _handleErrors(response)
  }
}


export function * toggleCompleted (api, { listId, itemId, completed }) {
  const token = yield select(getToken)
  const response = yield call(api.updateTodoItem, listId, itemId, { completed }, token)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield _handleErrors(response)
  }
}

// TODO merge with toggle
export function * updateItem (api, { listId, itemId, itemData }) {
  const token = yield select(getToken)
  const response = yield call(api.updateTodoItem, listId, itemId, itemData, token)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield _handleErrors(response)
  }
}

export function * updateList (api, { listId, listData }) {
  const token = yield select(getToken)
  const response = yield call(api.updateList, listId, listData, token)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield _handleErrors(response)
  }
}

export function * deleteTodoItem (api, { listId, itemId }) {
  const token = yield select(getToken)
  const response = yield call(api.deleteTodoItem, listId, itemId, token)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield _handleErrors(response)
  }
}

export function * deleteTodoList (api, { listId }) {
  const token = yield select(getToken)
  const response = yield call(api.deleteTodoList, listId, token)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield _handleErrors(response)
  }
}

export function * addListItem (api, { listId, itemData }) {
  const token = yield select(getToken)
  const response = yield call(api.addListItem, listId, itemData, token)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield _handleErrors(response)
  }
}

export function * getAllLists (api) {
  const token = yield select(getToken)
  const response = yield call(api.getAllLists, token)

  if (response.ok) {
    const lists = path(['data', 'results'], response)
    yield put(TodoActions.allListsSuccess(lists))
  } else {
    yield _handleErrors(response)
  }
}

export function * addList (api, { listData }) {
  const token = yield select(getToken)
  const response = yield call(api.addList, listData, token)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield _handleErrors(response)
  }
}

function * _handleErrors(response) {
  if (!response.ok) {
    if (response.status === 401) {
      yield put(TodoActions.logoutRequest())
      const nav = NavigationActions.navigate({ routeName: 'LaunchScreen' })
      yield put(nav)
    }
    yield put(TodoActions.requestError(response.data))
  }
}
