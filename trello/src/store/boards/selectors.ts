import { AppState } from "..";

export const getBoards = (state: AppState) : Array<any> => state.boards.boardsList
