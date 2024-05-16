import { hideLoading, showLoading } from 'react-redux-loading-bar'

import leaderboardAPI from '../../services/leaderboard'

export const leaderboardActionType = {
  SET: 'leaderboard/set'
}

export const leaderboardActions = {
  set (leaderboard) {
    return {
      type: leaderboardActionType.SET,
      payload: { leaderboard }
    }
  }
}

function asyncSetLeaderboard () {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const response = await leaderboardAPI.getLeaderboard()
      dispatch(leaderboardActions.set(response?.data.leaderboards))
    } catch (error) {
      // console.log(error);
      // alert(error.message);
      dispatch(hideLoading())
    } finally {
      dispatch(hideLoading())
    }
  }
}

export default {
  asyncSetLeaderboard
}
