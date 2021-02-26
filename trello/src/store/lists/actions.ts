import { ACTION_TYPES } from "./types"

export const getDataLists = () => ({
    type: ACTION_TYPES.DATALISTS,
    
})

export const setLists = (data: Array<any>) => ({
    type: ACTION_TYPES.SET_LISTS,
    payload:data
    
})