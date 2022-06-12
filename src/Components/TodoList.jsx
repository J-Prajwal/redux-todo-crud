import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { listTodo } from "../Store/Actions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  useEffect(() => {
    axios.get("http://localhost:8080/todos").then((r) => {
      const handleList = () => {
        dispatch(listTodo({ ...r.data }));
      };
      handleList();
    });
  }, [dispatch]);
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {todos.map(({ value, id, isCompleted }) => (
          <>
            <div key={id}>{value}</div>
            <button>Mark as complete</button>
            <button>Remove</button>
            <button>Update</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
