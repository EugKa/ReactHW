
import { subscribe } from "../../utils";
import { request } from "../service";
import { setBoards } from "./actions"
import {ACTION_TYPES} from './types'

const fetchBoardsWorker: any = ({dispatch}: {dispatch: any}) => {
  dispatch(
    request({
      path: '/1/members/me/boards?',
      authRequired: true,
      onSuccess: data => {
        console.log(data);
        dispatch(setBoards(data));
      },
      onError: error => {
        console.log(error);
      }
    })
  );
};

const fetchMiddleware = ({ dispatch }: any) => (next: any) =>
  subscribe(ACTION_TYPES.DATA_BOARD, fetchBoardsWorker)(next, dispatch);

export const boardsMiddleware = [fetchMiddleware];
