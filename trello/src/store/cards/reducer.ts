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
    default:
      return state;
  }
};

export default cardsReducer