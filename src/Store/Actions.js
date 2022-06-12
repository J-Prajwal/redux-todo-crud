import { ADD_TODO, LIST_TODO } from "./Action.types";

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const listTodo = (payload) => ({ type: LIST_TODO, payload });
