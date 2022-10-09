import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import ToDoList from "./components/ToDoList/ToDoList";
import "./App.css";

function App() {

    const initialState = JSON.parse(localStorage.getItem('todo')) || [];
    const [todo, setTodo] = useState(initialState);
    useEffect(()=>{
      localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

  // const [todo, setTodo] = useState([
  //   {
  //     id: 1,
  //     title: "1. Create ToDo-list",
  //     status: false,
  //   },
  //   {
  //     id: 2,
  //     title: "2. Code review",
  //     status: true,
  //   },
  //   {
  //     id: 3,
  //     title:"3. Push to GitHub ",
  //     status: true,
  //   },
  // ]);
  return (
    <>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <ToDoList todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
