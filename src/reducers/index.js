import loggedReducer from "./loggedReducer";
import counterReducer from "./counter";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    loggedData: loggedReducer

});

export default allReducers