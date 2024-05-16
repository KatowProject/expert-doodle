import Axios from './tools'
import { tokenHandler } from '../utils/tokenHandler'

const getThreads = async () => {
  try {
    const response = await Axios.get('threads')
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

const getThread = async (threadId) => {
  try {
    const response = await Axios.get(`threads/${threadId}`)
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

const addThread = async (title, category = '', body) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokenHandler.getToken()}`
  }

  try {
    const response = await Axios.post('threads', { title, category, body }, { headers })
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

const upVote = async (threadId) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokenHandler.getToken()}`
  }

  try {
    const response = await Axios.post(`threads/${threadId}/up-vote`, {}, { headers })
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

const downVote = async (threadId) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokenHandler.getToken()}`
  }

  try {
    const response = await Axios.post(`threads/${threadId}/down-vote`, {}, { headers })
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

const cancelVote = async (threadId) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokenHandler.getToken()}`
  }

  try {
    const response = await Axios.post(`threads/${threadId}/neutral-vote`, {}, { headers })
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

export default { getThreads, getThread, addThread, upVote, downVote, cancelVote }
