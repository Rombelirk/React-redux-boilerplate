import { createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "../reducers/counterReducer.js";
import reduxThunk from 'redux-thunk';

let rootReducer = combineReducers({
    counter: counterReducer
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;