import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import TodoApi from '../Services/TodoApi'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import { getAllLists, toggleCompleted, deleteTodoItem, deleteTodoList } from './TodoSagas'
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
    takeLatest(TodoTypes.ALL_LISTS_REQUEST, getAllLists, todoApi),
    takeEvery(TodoTypes.TOGGLE_COMPLETED_REQUEST, toggleCompleted, todoApi),
    takeEvery(TodoTypes.DELETE_ITEM_REQUEST, deleteTodoItem, todoApi),
    takeEvery(TodoTypes.DELETE_LIST_REQUEST, deleteTodoList, todoApi),
  ])
}
