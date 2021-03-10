import { ACTION_TYPES } from "./types"

export const getDataCards = (id: string) => ({
    type: ACTION_TYPES.DATA_CARDS,
    payload: id 
})

export const setCards = (data: Array<any>) => ({
    type: ACTION_TYPES.SET_CARDS,
    payload:data
})

export const addCard = (data:any) => ({
    type:ACTION_TYPES.ADD_CARD,
    payload:data
})

export const successAddedCard = (data:any) => ({
    type:ACTION_TYPES.SUCCESS_ADDED_CARD,
    payload:data
})

export const deleteCard = (id:string) => ({
    type:ACTION_TYPES.DELETE_CARD,
    payload:id
})

export const successDeletedCard = (id:any) => ({
    type:ACTION_TYPES.SUCCESS_DELETE_CARD,
    payload:id
})



