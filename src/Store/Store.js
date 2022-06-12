import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { todoReducer } from "./Reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
