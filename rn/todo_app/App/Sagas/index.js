import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import TodoApi from '../Services/TodoApi'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import { login, updateList, getAllLists, toggleCompleted, deleteTodoItem, deleteTodoList, addListItem, addList, updateItem } from './TodoSagas'
import { TodoTypes } from '../Redux/TodoRedux'

/* ------------- Types ------------- */

/* ------------- Sagas ------------- */

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const todoApi = DebugConfig.useFixtures ? FixtureAPI : TodoApi.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(TodoTypes.LOGIN_REQUEST, login, todoApi),
    takeLatest(TodoTypes.ALL_LISTS_REQUEST, getAllLists, todoApi),
    takeEvery(TodoTypes.TOGGLE_COMPLETED_REQUEST, toggleCompleted, todoApi),
    takeEvery(TodoTypes.UPDATE_ITEM_REQUEST, updateItem, todoApi),
    takeEvery(TodoTypes.DELETE_ITEM_REQUEST, deleteTodoItem, todoApi),
    takeEvery(TodoTypes.DELETE_LIST_REQUEST, deleteTodoList, todoApi),
    takeEvery(TodoTypes.ADD_ITEM_REQUEST, addListItem, todoApi),
    takeEvery(TodoTypes.ADD_LIST_REQUEST, addList, todoApi),
    takeEvery(TodoTypes.UPDATE_LIST_REQUEST, updateList, todoApi),
  ])
}
