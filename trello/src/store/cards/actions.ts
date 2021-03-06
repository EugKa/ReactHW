import { ACTION_TYPES } from "./types"

export const getDataCards = (id: string) => ({
    type: ACTION_TYPES.DATA_CARDS,
    payload: id
    
})

export const setCards = (data: Array<any>) => ({
    type: ACTION_TYPES.SET_CARDS,
    payload:data
    
})