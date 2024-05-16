import { isPreloadActionType } from './action'

const preloadReducer = (state = false, action = {}) => {
  switch (action.type) {
    case isPreloadActionType.SET_PRELOAD:
      return action.payload
    default:
      return state
  }
}

export default preloadReducer
