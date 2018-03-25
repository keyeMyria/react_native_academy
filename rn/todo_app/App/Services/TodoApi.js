import apisauce from 'apisauce'

const create = (baseURL = 'http://127.0.0.1:8000/') => {
  // TODO for android emulator, we need to use the loopback gtw, make it dynamic in __DEV__
// const create = (baseURL = 'http://10.0.2.2:8000/') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout
    timeout: 10000
  })

  const authHeaders = (token) => ({headers: {Authorization: `JWT ${token}`}})

  const register = (username, password, email) => api.post('users/', {username, password, email})
  const login = (username, password) => api.post('api/token-auth/', {username, password})
  const getAllLists = (token) => api.get('lists/', {}, authHeaders(token))
  const getListsWithTitle = (title, token) => api.get('lists/', {search: `${title}`}, authHeaders(token))
  const updateTodoItem = (listId, itemId, itemData, token) => api.patch(`lists/${listId}/items/${itemId}/`, itemData, authHeaders(token))
  const deleteTodoItem = (listId, itemId, token) => api.delete(`lists/${listId}/items/${itemId}/`, {}, authHeaders(token))
  const addListItem = (listId, itemData, token) => api.post(`lists/${listId}/items/`, itemData, authHeaders(token))
  const addList = (listData, token) => api.post(`lists/`, listData, authHeaders(token))
  const deleteTodoList = (listId, token) => api.delete(`lists/${listId}/`, {}, authHeaders(token))
  const updateList = (listId, listData, token) => api.patch(`lists/${listId}/`, listData, authHeaders(token))

  return {
    // "Interface" of the API functions from step 2
    register,
    login,
    getAllLists,
    getListsWithTitle,
    updateTodoItem,
    deleteTodoItem,
    deleteTodoList,
    addListItem,
    updateList,
    addList,
  }
}

// let's return back our create method as the default.
export default {
  create
}
