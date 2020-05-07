import * as ActionTypes from './types'

//User Actions
export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: {
      currentUser: user,
    },
  }
}

export const clearUser = () => {
  return {
    type: ActionTypes.CLEAR_USER,
  }
}

//Channel Actions

export const setCurrentChannel = (channel) => {
  return {
    type: ActionTypes.SET_CURRENT_CHANNEL,
    payload: {
      currentChannel: channel,
    },
  }
}
