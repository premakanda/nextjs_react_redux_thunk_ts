import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import { reducer } from "./reducer";

let rootReducer = combineReducers({
    root: reducer
});
export type AppState = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
