import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  allListsRequest: null,
  allListsSuccess: ['lists'],
  toggleCompletedRequest: ['listId', 'itemId', 'completed'],
  toggleCompletedSuccess: null,
  deleteItemRequest: ['listId', 'itemId'],
  deleteListRequest: ['listId'],
  addItemRequest: ['listId', 'itemData'],
  requestError: null
})

export const TodoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  lists: [],
  fetching: null,
  error: null,
})

/* ------------- Selectors ------------- */


/* ------------- Reducers ------------- */

export const allListsRequest = (state) =>
  state.merge({ fetching: true })

export const allListsSuccess = (state, { lists }) => {
  return state.merge({ fetching: false, error: null, lists })
}

export const requestError = (state) =>
  state.merge({ fetching: false, error: true, lists: null })

export const toggleCompletedRequest = state => state

export const deleteItemRequest = state => state

export const deleteListRequest = state => state

export const addItemRequest = state => state

export const toggleCompletedSuccess = (state, { lists }) => {
  // TODO for now we refresh ALL the lists, which is inefficient but we have to normalize state first
  return state.merge({ fetching: false, error: null, lists })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ALL_LISTS_REQUEST]: allListsRequest,
  [Types.ALL_LISTS_SUCCESS]: allListsSuccess,
  [Types.REQUEST_ERROR]: requestError,
  [Types.TOGGLE_COMPLETED_REQUEST]: toggleCompletedRequest,
  [Types.DELETE_ITEM_REQUEST]: deleteItemRequest,
  [Types.DELETE_LIST_REQUEST]: deleteListRequest,
  [Types.ADD_ITEM_REQUEST]: addItemRequest,
  // [Types.TOGGLE_COMPLETED_SUCCESS]: toggleCompletedSuccess,
})
