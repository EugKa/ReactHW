import { ACTION_TYPES } from './types';

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
    case ACTION_TYPES.ADD_CARD:
      return{...state ,cards:{
        id: payload.id,
        name: payload.name
      }}
    default:
      return state;
  }
};

export default cardsReducer