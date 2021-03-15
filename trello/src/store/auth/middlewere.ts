import { ROUTES_URLS } from "../../components/App/routes";
import { getFromLocalStorage, setToLocalStorage, subscribe } from "../../utils";
import { navigate } from "../router";
import { request } from "../service";
import { Action } from "../types";
import { setToken } from "./actions";
import { ACTION_TYPES } from "./types";

const APP_TOKEN = 'CUSTOM_APP_TOKEN'

const setTokenWorker = ({action, next, dispatch}: any)  => {
  dispatch(navigate(ROUTES_URLS.DASHBOARD));
  setToLocalStorage(APP_TOKEN, action.payload);
  next(action)
};

const readTokenWorker = ({action, next, dispatch}: any) => {
  const token = getFromLocalStorage(APP_TOKEN);
  if (token) {
    dispatch(setToken(token));
  }
  next(action);
}

const logOutWorker = ({ action, next, dispatch }: any) => {
  dispatch(setToken(''));
  dispatch(navigate(ROUTES_URLS.HOME));
  next(action);
};


const readTokenMiddleware =({dispatch}: any) => (next: any) => 
  subscribe(ACTION_TYPES.READ_TOKEN, readTokenWorker)(next, dispatch)

const setTokenMiddleware = ({dispatch} :any) => (next:any) => 
subscribe(ACTION_TYPES.SET_TOKEN, setTokenWorker)(next, dispatch)

const logOutMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.LOGOUT, logOutWorker)(next, dispatch);
  
export const authMiddlewares = [
  setTokenMiddleware, 
  readTokenMiddleware,
  logOutMiddleware
];