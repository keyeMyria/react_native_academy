import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['jwtToken'],
  registerRequest: ['username', 'password', 'email'],
  registerSuccess: ['jwtToken'],
  allListsRequest: null,
  allListsSuccess: ['lists'],
  toggleCompletedRequest: ['listId', 'itemId', 'completed'],
  updateItemRequest: ['listId', 'itemId', 'itemData'],
  toggleCompletedSuccess: null,
  deleteItemRequest: ['listId', 'itemId'],
  deleteListRequest: ['listId'],
  addItemRequest: ['listId', 'itemData'],
  addListRequest: ['listData'],
  updateListRequest: ['listId', 'listData'],
  requestError: ['errors'],
  deleteState: null,
})

export const TodoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  lists: [],
  fetching: null,
  error: null,
  jwtToken: null,
  isAuthenticated: false,
})

/* ------------- Selectors ------------- */


/* ------------- Reducers ------------- */

export const allListsRequest = (state) =>
  state.merge({ fetching: true })

export const allListsSuccess = (state, { lists }) => {
  return state.merge({ fetching: false, error: null, lists })
}

export const requestError = (state, { errors }) =>
  state.merge({ fetching: false, error: errors })

export const toggleCompletedRequest = state => state

export const deleteItemRequest = state => state

export const deleteListRequest = state => state

export const addItemRequest = state => state

export const addListRequest = state => state

export const updateItemRequest = state => state

export const updateListRequest = state => state

export const loginRequest = state => state.merge({ fetching: true, error: null })

export const loginSuccess = (state, {jwtToken}) => state.merge({ fetching: false, error: null, jwtToken, isAuthenticated: true })

export const registerRequest = state => state.merge({ fetching: true, error: null })

export const registerSuccess = state => state.merge({ fetching: false, error: null })

export const deleteState = state => INITIAL_STATE

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
  [Types.ADD_LIST_REQUEST]: addListRequest,
  [Types.UPDATE_ITEM_REQUEST]: updateItemRequest,
  [Types.UPDATE_LIST_REQUEST]: updateListRequest,
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_SUCCESS]: registerSuccess,

  [Types.DELETE_STATE]: deleteState,
})
