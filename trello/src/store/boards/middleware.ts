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

