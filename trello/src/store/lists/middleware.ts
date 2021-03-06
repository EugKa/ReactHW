
import { boardProps } from "../../components/Board";
import { subscribe } from "../../utils";
import { request } from "../service";
import { setLists } from "./actions";
import {ACTION_TYPES} from './types'

const fetchListsWorker: any = ({dispatch}: {dispatch: any}, id:string):Promise<boardProps> => {
  return dispatch(
    request({
      path: `/1/boards/${id}/lists?`,
      authRequired: true,
      onSuccess: data => {
        console.log("lists",data);
        dispatch(setLists(data));
      },
      onError: error => {
        console.log(error);
      }
    })
  );
};

const fetchMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.DATALISTS, fetchListsWorker)(next, dispatch);

export const listsMiddleware = [fetchMiddleware];
