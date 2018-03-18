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

  const getAllLists = () => api.get('lists')
  const updateTodoItem = (listId, itemId, itemData) => api.patch(`lists/${listId}/items/${itemId}/`, itemData)
  const deleteTodoItem = (listId, itemId) => api.delete(`lists/${listId}/items/${itemId}/`)
  const deleteTodoList = (listId) => api.delete(`lists/${listId}/`)
  const addListItem = (listId, itemData) => api.post(`lists/${listId}/items/`, itemData)
  const addList = (listData) => api.post(`lists/`, listData)
  const updateList = (listId, listData) => api.patch(`lists/${listId}/`, listData)

  return {
    // "Interface" of the API functions from step 2
    getAllLists,
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
