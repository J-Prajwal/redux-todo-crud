import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

export const login = (data) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .get("https://reqres.in/api/login", data)
    .then((r) => {
      dispatch({ type: LOGIN_SUCCESS, payload: r.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const logout = () => ({ type: LOGOUT });
