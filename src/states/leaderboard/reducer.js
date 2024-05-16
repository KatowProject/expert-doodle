import { leaderboardActionType } from './action'

export default function leaderboardReducer (leaderboard = [], action = {}) {
  switch (action.type) {
    case leaderboardActionType.SET:
      return action.payload.leaderboard !== undefined ? action.payload.leaderboard : leaderboard
    default:
      return leaderboard
  }
}
