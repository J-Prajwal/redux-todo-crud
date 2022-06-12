import axios from "axios";
import { ADD_TODO, LIST_TODO } from "./Action.types";

export const todoReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      axios.post("http://localhost:8080/todos", { ...payload });
      return state;
    }

    case LIST_TODO: {
      let temp = [];
      for (let key in payload) {
        temp.push(payload[key]);
      }
      console.log(temp);
      return {
        ...state,
        todos: [...temp],
      };
    }

    default: {
      return state;
    }
  }
};
