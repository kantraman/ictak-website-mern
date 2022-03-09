import { createStore , applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { courceCreateReducer, courceDeleteReducer, courceListReducers, courceUpdateReducer} from "./reducers/courceReducers";
import{userRegisterReducer} from "./reducers/userReducers";
const reducer = combineReducers({
  courceList: courceListReducers,
  courceCreate: courceCreateReducer,
  courceUpdate: courceUpdateReducer,
  courceDelete: courceDeleteReducer,
  courceRegister: userRegisterReducer,
});

const initialState = {};

const middleware =[thunk];
const store = createStore(
    reducer ,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;