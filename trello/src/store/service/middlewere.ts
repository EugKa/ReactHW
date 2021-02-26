import { createUrl, subscribe, Worker } from "../../utils";
import { getToken } from "../auth";
import { ActionService, ACTION_TYPES } from "./types";


const requestWorker: Worker<any> = async ({action, next, getState}) => {
 // const requestId = uuid()
 const {path, onSuccess, method = 'GET', authRequired} = action;
  const appState = getState!()
  const token = getToken(appState)

 const options: any = {
   method,
   headers: {
     Accept: 'application/json','Content-Type': 'application/json'
   }
 }
 const response = await fetch(createUrl(path, authRequired, token), options)
 if(response.status >= 400) {
   console.log("errror");
   
 }
 const data = await response.json()
 onSuccess(data)

};

const requestMiddleware = ({dispatch, getState}: any) => 
  (next: any) => 
  subscribe(ACTION_TYPES.REQUEST, requestWorker)(next, dispatch ,getState)

export const serviceMiddleware = [requestMiddleware]
  




