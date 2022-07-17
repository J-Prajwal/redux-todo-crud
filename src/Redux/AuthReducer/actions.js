import axios from "axios";
import * as types from "./actionTypes";

export const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post("http://masai-api-mocker.herokuapp.com/auth/register", payload)
    .then((res) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      return types.REGISTER_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.REGISTER_FAILED, payload: err });
      return types.REGISTER_FAILED;
    });
};

export const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  axios
    .post("http://masai-api-mocker.herokuapp.com/auth/login", params)
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCESS, payload: res });
      return types.LOGIN_SUCESS;
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILED, payload: err });
      return types.LOGIN_FAILED;
    });
};
