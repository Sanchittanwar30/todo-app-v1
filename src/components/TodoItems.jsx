import Todoi from "./Todoi";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDelete }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Todoi
          todoname={item.doName}
          tododate={item.dueDate}
          onDelete={onDelete}
        ></Todoi>
      ))}
    </div>
  );
};

export default TodoItems;
