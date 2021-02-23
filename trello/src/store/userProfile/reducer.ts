import { ACTION_TYPES } from "./types";

export interface UserState {
    userParam: Array<any>
}

const INITIAL_STATE = {
    userParam: []
}

const userReducer = (state: UserState = INITIAL_STATE, {type, payload}: any) => {
    switch (type) {
        case ACTION_TYPES.SET_USER_PROFILE:
        return {...state, userParam: payload}
        default:
            return state;
    }
}

export default userReducer