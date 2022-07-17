import * as types from "./actionTypes";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TASK_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.GET_TASK_SUCCESS: {
      return { ...state, tasks: payload, isLoading: false, isError: false };
    }

    case types.GET_TASK_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
