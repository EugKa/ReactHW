
import { Board } from "../../components/Board";
import { subscribe } from "../../utils";
import { request } from "../service";
import { setCards } from "./actions";
import {ACTION_TYPES} from './types'
import {getSegments} from '../router'



const fetchCardsWorker: any = ({dispatch, action, getState}: any) => {
  console.log('+=====', action);
  const id = action.payload
  const appState = getState();
  const allSegments = getSegments(appState)
  console.log(allSegments)
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

const fetchMiddleware = ({ dispatch, getState }: any) => (next: any) =>
  subscribe(ACTION_TYPES.DATA_CARDS, fetchCardsWorker)(next, dispatch, getState);

export const cardsMiddleware = [fetchMiddleware];
