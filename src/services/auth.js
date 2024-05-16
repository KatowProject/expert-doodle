import Axios from './tools'

const login = async (email, password) => {
  try {
    const response = await Axios.post('/login', { email, password })
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

const register = async (name, email, password) => {
  try {
    const response = await Axios.post('/register', { name, email, password })
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

export default { login, register }
