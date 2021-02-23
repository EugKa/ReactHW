import { getToken } from "../auth";
import { setUserProfile } from "./actions";
import { ACTION_TYPES } from "./types";
const { REACT_APP_APY_KEY } = process.env;


const getUserUrl = (token: string) => {
    return `https://api.trello.com/1/members/me?key=${REACT_APP_APY_KEY}&token=${token}`
}

const fetchDataUser: any = async ({dispatch, state}: {dispatch:any, state:any}) => {
    const token = getToken(state)
    const response = await fetch(getUserUrl(token))
    if(response.ok === true && response.status === 200) {
        const data = await response.json();
        console.log('user',data)
        dispatch(setUserProfile(data))
        
    } else {
        throw Error('errror')
    }
}

const userMiddleware = ({ dispatch, getState}: any) => (next:any) => (action:any) => {
    const state = getState()
    if (action.type === ACTION_TYPES.GET_USER_PROFILE) {
        fetchDataUser({dispatch, state})
    } else {
      next(action)
    }
   
}

export const userProfileMiddleware = [userMiddleware]
