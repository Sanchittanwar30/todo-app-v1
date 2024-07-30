import AddTodo from "./components/AddTodo";
import AppName from "./components/Appname";

import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoT = [
    {
      doName: "Fix meeting",
      dueDate: "28/04/2024",
    },
    {
      doName: "Buy Groceries",
      dueDate: "29/04/2024",
    },
    {
      doName: "Go to Store",
      dueDate: "30/04/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoT}></TodoItems>
    </center>
  );
}

export default App;
