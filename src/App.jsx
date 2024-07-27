import AddTodo from "./components/AddTodo";
import AppName from "./components/Appname";
import Todoi1 from "./components/Todoi1";
import Todoi2 from "./components/todoi2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <Todoi1 />
        <Todoi2 />
      </div>
    </center>
  );
}

export default App;
