import Axios from './tools'
import { tokenHandler } from '../utils/tokenHandler'

const addComment = async (threadId, comment) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokenHandler.getToken()}`
  }

  try {
    const response = await Axios.post(`threads/${threadId}/comments`, {
      content: comment
    }, { headers })
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

const upVote = async (threadId, commentId) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokenHandler.getToken()}`
  }

  try {
    const response = await Axios.post(`threads/${threadId}/comments/${commentId}/up-vote`, {}, { headers })
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

const downVote = async (threadId, commentId) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokenHandler.getToken()}`
  }

  try {
    const response = await Axios.post(`threads/${threadId}/comments/${commentId}/down-vote`, {}, { headers })
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

const cancelVote = async (threadId, commentId) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokenHandler.getToken()}`
  }

  try {
    const response = await Axios.post(`threads/${threadId}/comments/${commentId}/neutral-vote`, {}, { headers })
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

export default { addComment, upVote, downVote, cancelVote }
