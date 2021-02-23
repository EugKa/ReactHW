import { ACTION_TYPES } from "./types"

export const getUserProfile = () => ({
    type: ACTION_TYPES.GET_USER_PROFILE
})

export const setUserProfile = (data: Array<any>) => ({
    type: ACTION_TYPES.SET_USER_PROFILE,
    payload: data
})