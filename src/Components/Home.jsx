import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/Actions";
import { v4 as uuid } from "uuid";
import axios from "axios";
import {Link} from 'react-router-dom';

const Home = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    let value = ref.current.value;
    console.log('here');
    dispatch(addTodo({ id: uuid(), value: value, isCompleted: false }));
  };
  return <div>
    <h1>Todo App</h1>
    <input type="text" placeholder="Enter your tasks" ref={ref} />
    <button onClick={handleAddTodo}>Add Todo</button>

    <Link to="/todo">Todos List</Link>
  </div>;
};

export default Home;
