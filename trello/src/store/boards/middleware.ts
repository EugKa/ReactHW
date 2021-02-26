
import { subscribe } from "../../utils";
import { request } from "../service";
import { setBoards } from "./actions"
import {ACTION_TYPES} from './types'

const fetchBoardsWorker: any = ({dispatch}: {dispatch: any;}) => {
  console.log('FETCHED');

  dispatch(
    request({
      path: '/1/members/me/boards?fields=name,url&',
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
  subscribe(ACTION_TYPES.DATABOARD, fetchBoardsWorker)(next, dispatch);

export const boardsMiddleware = [fetchMiddleware];



// const fetchBoardsWorker: any =  ({dispatch }: {dispatch:any}) => {
//  dispatch(request({
//    path: '1/members/me/boards?fields=name,url&',
//    authRequired: true,
//    onSuccess: data => {
//      console.log(data);
//      dispatch(setBoards(data))
//    }
//  }))
    
// }
// const fetchMiddleware = ({ dispatch}: any) => (next:any)  => {
//     subscribe(ACTION_TYPES.DATABOARD, fetchBoardsWorker)(next, dispatch)
   
// }

// export const boardsMiddlawre = [fetchMiddleware]
// board1ID 6026be4746606b375f546224
// list https://api.trello.com/1/boards/6026be4746606b375f546224/lists?key=63e14cc212fae521ee2c6f0dcf5d8cc1&token=297f6ca37c049791c5679b38b81ea83311e1db27b70bc89e5d133eaf718b0e6b
// cards https://api.trello.com/1/boards/6026be4746606b375f546224/cards?key=63e14cc212fae521ee2c6f0dcf5d8cc1&token=297f6ca37c049791c5679b38b81ea83311e1db27b70bc89e5d133eaf718b0e6b
