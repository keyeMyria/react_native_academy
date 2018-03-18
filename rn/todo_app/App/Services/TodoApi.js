import apisauce from 'apisauce'

const create = (baseURL = 'http://127.0.0.1:8000/') => {
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

  return {
    // "Interface" of the API functions from step 2
    getAllLists,
  }
}

// let's return back our create method as the default.
export default {
  create
}
