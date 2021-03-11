import { ACTION_TYPES } from './types';
import {v4 as uuidv4} from 'uuid';
export interface CardsState {
  cards: Array<any>;
}
const INITIAL_STATE = {
  cards: []
};



const cardsReducer = (state: CardsState = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ACTION_TYPES.SET_CARDS:
      return { ...state, cards: payload };

    case ACTION_TYPES.SUCCESS_ADDED_CARD: 
      const newItem = {
        name:payload.name, 
        idList:payload.idList,
        id:uuidv4()
      }
      return{...state, cards: [...state.cards, newItem]}

    case ACTION_TYPES.SUCCESS_DELETE_CARD:
      // const delItem = [
      //   {...state.cards.filter(card => card !== payload.id)}
      // ]
      // return delItem
      return {...state, cards: state.cards.filter((card) => card !== payload
      )}
      

    default:
      return state;
  }
};

export default cardsReducer