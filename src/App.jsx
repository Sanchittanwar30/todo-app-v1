import AddTodo from "./components/AddTodo";
import AppName from "./components/Appname";
import Welmessage from "./components/Welmessage";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const [toDoitems, settoDoitems] = useState([]);
  const handlenewItem = (itemName, itemDuedate) => {
    const newItem = [...toDoitems, { doName: itemName, dueDate: itemDuedate }];
    settoDoitems(newItem);
  };

  const handleDelitem = (toItemname) => {
    const newItem = toDoitems.filter((item) => item.doName !== toItemname);
    settoDoitems(newItem);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onnewItem={handlenewItem} />
      {toDoitems.length === 0 && <Welmessage />}
      <TodoItems todoItems={toDoitems} onDelete={handleDelitem}></TodoItems>
    </center>
  );
}

export default App;
