import { ACTION_TYPES } from './types';

export interface BoardsState {
  boardsList: Array<any>;
}
const INITIAL_STATE = {
  boardsList: []
};



const boardsReducer = (state: BoardsState = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case ACTION_TYPES.SET_BOARDS:
      return { ...state, boardsList: payload };
    default:
      return state;
  }
};

export default boardsReducer