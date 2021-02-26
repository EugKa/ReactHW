import { ACTION_TYPES } from './types';

export interface ListsState {
  lists: Array<any>;
}
const INITIAL_STATE = {
  lists: []
};



const listsReducer = (state: ListsState = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ACTION_TYPES.SET_LISTS:
      return { ...state, lists: payload };
    default:
      return state;
  }
};

export default listsReducer