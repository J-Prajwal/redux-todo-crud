import * as types from "./actionTypes";
import axios from "axios";

export const getTask = () => (dispatch) => {
  dispatch({ type: types.GET_TASK_LOADING });
  return axios
    .get("http://localhost:5000/tasks")
    .then((res) => {
      dispatch({ type: types.GET_TASK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_TASK_FAILURE, payload: err });
    });
};

export const updateTask = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_TASK_LOADING });
  axios
    .patch(`http://localhost:5000/tasks/${id}`, payload)
    .then((res) => {
      dispatch({ type: types.UPDATE_TASK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_TASK_FAILURE, payload: err });
    });
};

export const addSubtask = (id, payload) => (dispatch) => {
  dispatch({ type: types.ADD_SUBTASK_LOADING });
  axios
    .patch(`http://localhost:5000/tasks/${id}`, payload)
    .then((res) => {
      dispatch({ type: types.ADD_SUBTASK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.ADD_SUBTASK_FAILURE, payload: err });
    });
};

export const deleteSubtask = (id, payload) => (dispatch) => {
  dispatch({ type: types.DELETE_SUBTASK_LOADING });
  axios
    .delete(`http://localhost:5000/tasks/${id}`, payload)
    .then((res) => {
      dispatch({ type: types.DELETE_SUBTASK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_SUBTASK_FAILURE, payload: err });
    });
};
