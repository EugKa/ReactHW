

import { subscribe } from "../../utils";
import { getToken } from "../auth";
import { request } from "../service";
import { setCards, successAddedCard, successDeletedCard } from "./actions";
import {ACTION_TYPES} from './types'
const { REACT_APP_APY_KEY } = process.env;

const fetchCardsWorker: any = ({dispatch, action}:  {dispatch: any, action: {type: string; payload: string}}) => {
  const id = action.payload
  return dispatch(
    request({
      path: `/1/boards/${id}/cards?`,
      // method:'GET',
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

const deleteCardWorker: any = ({dispatch, action}:  {dispatch: any, action: {type: string; payload: string}}) => {
  console.log('deleteCardAction', action);
  const id = action.payload
  return dispatch(
    request({
      path: `/1/cards/${id}?`,
      method:'DELETE',
      authRequired: true,
      onSuccess: req => {
        console.log("delete", id);
        dispatch(successDeletedCard({id}));
      },
      onError: error => {
        console.log(error);
      }
    })
  );

};

const addCardWorker:any = ({dispatch, action, getState} :  {dispatch: any, action:any, getState:any}) => {
  console.log("addCardAction",action);

  const appState = getState!()
  const token = getToken(appState)
  
  const idList = action.payload.idList
  const name = action.payload.name
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, idList:idList })
  };
  
  fetch(`https://api.trello.com/1/cards?key=${REACT_APP_APY_KEY}&token=${token}&idList=${idList}`, requestOptions)
      .then(response => response.json())
      .then(data => dispatch(successAddedCard(data))
      );
  }

const fetchMiddleware = ({ dispatch, getState }: any) => (next: any) =>
  subscribe(ACTION_TYPES.DATA_CARDS, fetchCardsWorker)(next, dispatch, getState);

const deleteCardMiddleware = ({ dispatch, getState }: any) => (next: any) =>
  subscribe(ACTION_TYPES.DELETE_CARD, deleteCardWorker)(next, dispatch, getState);

const addCardMiddleware = ({dispatch, getState}:any) => (next:any) =>
  subscribe(ACTION_TYPES.ADD_CARD, addCardWorker)(next, dispatch, getState)

export const cardsMiddleware = [fetchMiddleware, addCardMiddleware, deleteCardMiddleware];
