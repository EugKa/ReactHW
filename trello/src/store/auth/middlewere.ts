import { getFromLocalStorage, setToLocalStorage, subscribe } from "../../utils";
import { request } from "../service";
import { Action } from "../types";
import { setToken } from "./actions";
import { ACTION_TYPES } from "./types";

const APP_TOKEN = 'CUSTOM_APP_TOKEN'

const authMiddleware = ({dispatch}: any) => (next: any) => (action: Action<ACTION_TYPES>) => {
  if( action.type === ACTION_TYPES.SET_TOKEN) {
    console.log('set Token');
    setToLocalStorage(APP_TOKEN, action.payload)
    // setTimeout(() => {
    //   dispatch(
    //     request({
    //       path:'https://my-spa-adb78-default-rtdb.firebaseio.com/data.json',
    //       onSuccess: (data: any) => {
    //         console.log('SUCCESS');
            
    //       }
    //     })
    //   )
    // })
  }
  next(action);
};

const readTokenWorker = ({action, next, dispatch}: any) => {
  const token = getFromLocalStorage(APP_TOKEN);
  if (token) {
    dispatch(setToken(token));
  }
  next(action);
}

const readTokenMiddleware =({dispatch}: any) => (next: any) => subscribe(ACTION_TYPES.READ_TOKEN, readTokenWorker)(next, dispatch)
  
export const authMiddlewares = [authMiddleware, readTokenMiddleware];