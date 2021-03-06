import { ACTION_TYPES } from "./types"

export const getDataLists = (id: string) => ({
    type: ACTION_TYPES.DATALISTS,
    payload: id
})

export const setLists = (data: Array<any>) => ({
    type: ACTION_TYPES.SET_LISTS,
    payload:data
    
})