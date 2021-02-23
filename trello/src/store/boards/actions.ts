import { ACTION_TYPES } from "./types"

export const getDataBoards = () => ({
    type: ACTION_TYPES.DATABOARD,
    
})

export const setBoards = (data: Array<any>) => ({
    type: ACTION_TYPES.SET_BOARDS,
    payload:data
    
})