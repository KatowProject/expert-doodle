import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://forum-api.dicoding.dev/v1/',
  timeout: 10000
})

export default axios
