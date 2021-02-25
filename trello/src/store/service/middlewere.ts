import { getNodeText } from "@testing-library/react";
import { subscribe, Worker } from "../../utils";
import { ActionService, ACTION_TYPES } from "./types";


const requestWorker: Worker<any> = async ({action, next}) => {
 // const requestId = uuid()
 const {path, onSuccess, methood = 'GET'} = action;
 const options: any = {
   headers: {
     Accept: 'application/json','Content-Type': 'application/json'
   }
 }
 const response = await fetch(path, options)
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
  




