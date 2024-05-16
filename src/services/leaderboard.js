import Axios from './tools'

const getLeaderboard = async () => {
  try {
    const response = await Axios.get('leaderboards')
    return response.data
  } catch (error) {
    return { error: error.response.data }
  }
}

export default { getLeaderboard }
