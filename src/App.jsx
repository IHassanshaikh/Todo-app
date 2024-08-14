import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import Todoitems from "./components/Todoitems";
import AppTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  const [todoitems, setTodoItems] = useState([]);
  
  const handleNewItem = (itemname, itemdate) => {
    const newTodoItem = [...todoitems, { name: itemname, duedate: itemdate }];
    setTodoItems(newTodoItem);
  };

  const hnadleDeleteButton = (TodoItems) => {
    const newTodoItems = todoitems.filter((item) => item.name !== TodoItems);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="Todo-container">
      <AppName />
      <AppTodo onNewItem={handleNewItem} />
      <Todoitems todoitems={todoitems} onDeleteClick={hnadleDeleteButton} />
    </center>
  );
}

export default App;
