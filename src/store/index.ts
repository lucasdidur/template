import { createStore, Store } from "redux";
import { UsersState } from "./ducks/users/types";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./ducks/rootReducer";

export interface AplicationState {
    users: UsersState,
}

/* eslint-disable no-underscore-dangle */
const store: Store<AplicationState> = createStore(rootReducer, composeWithDevTools());
/* eslint-enable */

export default store;