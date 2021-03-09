

import { subscribe } from "../../utils";
import { request } from "../service";
import { addCard, setCards } from "./actions";
import {ACTION_TYPES} from './types'
const { REACT_APP_APY_KEY } = process.env;

const fetchCardsWorker: any = ({dispatch, action}:  {dispatch: any, action: {type: string; payload: string}}) => {
  console.log('+=====', action);
  const id = action.payload
  return dispatch(
    request({
      // method:'GET',
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

const addCardWorker:any = ({dispatch, action} :  {dispatch: any, action:any}) => {
  console.log(action);
  const id = action.payload.id
  const name = action.payload.name
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name})
  };
  
  fetch(`https://api.trello.com/1/cards?key=${REACT_APP_APY_KEY}&token=63a5223d8bc1f3168394bccb5803fccd6d96baf3b09c3bb4699512d701866541&idList=${id}'`, requestOptions)
      .then(response => response.json())
      .then(data => dispatch(addCard(data)));
  }

const fetchMiddleware = ({ dispatch, getState }: any) => (next: any) =>
  subscribe(ACTION_TYPES.DATA_CARDS, fetchCardsWorker)(next, dispatch, getState);

const addCardMiddleware = ({dispatch, getState}:any) => (next:any) =>
  subscribe(ACTION_TYPES.ADD_CARD, addCardWorker)(next, dispatch, getState)

export const cardsMiddleware = [fetchMiddleware, addCardMiddleware];
