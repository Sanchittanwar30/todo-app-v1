import Todoi from "./Todoi";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Todoi todoname={item.doName} tododate={item.dueDate}></Todoi>
      ))}
    </div>
  );
};

export default TodoItems;
