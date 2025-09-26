import { legacy_createStore, applyMiddleware } from "redux";
import myReducer from "../reducers/myReducer";

import logger from "redux-logger";

var myStore = legacy_createStore(myReducer, applyMiddleware(logger));

export default myStore;
