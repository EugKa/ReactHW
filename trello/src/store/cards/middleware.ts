
import { Board } from "../../components/Board";
import { subscribe } from "../../utils";
import { request } from "../service";
import { setCards } from "./actions";
import {ACTION_TYPES} from './types'



const fetchCardsWorker: any = ({dispatch, action}: {dispatch: any, action: {type: string; payload: string}}) => {
  console.log('+=====', action);
  const id = action.payload
  return dispatch(
    request({
      path: `/1/boards/${id}/cards?`,
      authRequired: true,
      onSuccess: data => {
        console.log("cards", data);
        dispatch(setCards(data));
      },
      onError: error => {
        console.log(error);
      }
    })
  );
};

const fetchMiddleware = ({ dispatch, action }: any) => (next: any) =>
  subscribe(ACTION_TYPES.DATA_CARDS, fetchCardsWorker)(next, dispatch);

export const cardsMiddleware = [fetchMiddleware];
