import { getToken } from "../auth";
import { setBoards } from "./actions"
import {ACTION_TYPES} from './types'
const { REACT_APP_APY_KEY } = process.env;

const getUrl = (token: string) => {
  return `https://api.trello.com/1/members/me/boards?fields=name,url&key=${REACT_APP_APY_KEY}&token=${token}`
}

const fetchDataBoards: any = async ({dispatch,  state }:{dispatch:any, state: any}) => {
  const token = getToken(state)
  // const token = getToken()
  const response = await fetch(getUrl(token));
  if (response.ok === true && response.status === 200) {
      const boards = await response.json();
      console.log(boards,"data")
      dispatch(setBoards(boards)  )        
  } else {
    throw Error('Not ok')
  }
    
}
const boardsMiddleware = ({ dispatch, getState}: any) => (next:any) => (action:any) => {
    const state = getState()

    if (action.type === ACTION_TYPES.DATABOARD) {
      fetchDataBoards({dispatch, state})
    } else {
      next(action)
    }
   
}

export const boardsMiddlawre = [boardsMiddleware]
//id 6026be4746606b375f546224
//https://api.trello.com/1/boards/6026be4746606b375f546224/cards?key=63e14cc212fae521ee2c6f0dcf5d8cc1&token=297f6ca37c049791c5679b38b81ea83311e1db27b70bc89e5d133eaf718b0e6b