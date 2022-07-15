import {
  applyMiddleware,
  compose,
  combineReducers,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./AppReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  appReducer,
  authReducer,
});

export const Store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
