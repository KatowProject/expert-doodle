import { configureStore } from '@reduxjs/toolkit'
import { loadingBarReducer } from 'react-redux-loading-bar'

import authReducer from './auth/reducer'
import preload from './preload/reducer'
import threads from './threads/reducer'
import users from './users/reducer'
import thread from './thread/reducer'
import leaderboard from './leaderboard/reducer'

const store = configureStore({
  reducer: {
    auth: authReducer,
    loadingBar: loadingBarReducer,
    users,
    leaderboard,
    preload,
    threads,
    thread
  }
})

export default store
