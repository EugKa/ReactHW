
import { subscribe } from "../../utils";
import { request } from "../service";
import { setLists } from "./actions";
import {ACTION_TYPES} from './types'

const fetchListsWorker: any = ({dispatch}: {dispatch: any;}) => {
  console.log('FETCHED');

  dispatch(
    request({
      path: '/1/boards/6026be4746606b375f546224/lists?',
      authRequired: true,
      onSuccess: data => {
        console.log(data);
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
