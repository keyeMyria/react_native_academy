import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  allListsRequest: null,
  allListsSuccess: ['lists'],
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

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ALL_LISTS_REQUEST]: allListsRequest,
  [Types.ALL_LISTS_SUCCESS]: allListsSuccess,
  [Types.REQUEST_ERROR]: requestError
})
