import { ACTION_TYPES } from "./types"

export const getDataCards = () => ({
    type: ACTION_TYPES.DATA_CARDS,
    
})

export const setCards = (data: Array<any>) => ({
    type: ACTION_TYPES.SET_CARDS,
    payload:data
    
})