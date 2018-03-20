import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import TodoActions from '../Redux/TodoRedux'
import NavigationActions from 'react-navigation/src/NavigationActions'

export function * register (api, {username, password, email}) {
  const response = yield call(api.register, username, password, email)

  if (response.ok) {
    yield put(TodoActions.registerSuccess())
    // Navigates to login screen, user has to log in before using the App
    const nav = NavigationActions.navigate({
      routeName: 'LaunchScreen',
    });
    yield put(nav)
  } else {
    yield put(TodoActions.requestError(response.data))
  }
}

export function * login (api, {username, password}) {
  const response = yield call(api.login, username, password)

  if (response.ok) {
    const jwtToken = path(['data', 'token'], response)
    yield put(TodoActions.loginSuccess(jwtToken))
  } else {
    yield put(TodoActions.requestError(response.data))
  }
}

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

// TODO merge with toggle
export function * updateItem (api, { listId, itemId, itemData }) {
  const response = yield call(api.updateTodoItem, listId, itemId, itemData)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield put(TodoActions.requestError())
  }
}

export function * updateList (api, { listId, listData }) {
  const response = yield call(api.updateList, listId, listData)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield put(TodoActions.requestError())
  }
}

export function * deleteTodoItem (api, { listId, itemId }) {
  const response = yield call(api.deleteTodoItem, listId, itemId)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield put(TodoActions.requestError())
  }
}

export function * deleteTodoList (api, { listId }) {
  const response = yield call(api.deleteTodoList, listId)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield put(TodoActions.requestError())
  }
}

export function * addListItem (api, { listId, itemData }) {
  const response = yield call(api.addListItem, listId, itemData)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield put(TodoActions.requestError())
  }
}

export function * addList (api, { listData }) {
  const response = yield call(api.addList, listData)

  if (response.ok) {
    // For simplicity, we are refetching all lists
    yield put(TodoActions.allListsRequest())
  } else {
    yield put(TodoActions.requestError())
  }
}
