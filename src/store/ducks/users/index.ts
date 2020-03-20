import { UsersState, UsersTypes } from './types';
import { Reducer } from "redux";
import newVar from "./data";

const INITIAL_STATE: UsersState = {
    data: newVar,
    error: false,
    loading: false
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UsersTypes.LOAD_REQUEST:
            return {...state, loading:  true};
        case UsersTypes.LOAD_SUCCESS:
            return  {...state, loading: false, error: false, data: action.payload.data};
        case UsersTypes.LOAD_FAILURE:
            return  {...state, loading: false, error: true, data: []};
        default:
            return state;
    }
};

export default reducer;