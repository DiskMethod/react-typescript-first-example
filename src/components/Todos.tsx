import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

interface TodoProps {
  items: Todo[];
  onRemove: (id: string) => void;
  children?: React.ReactNode;
}

const Todos = (props: TodoProps) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemove={props.onRemove}
        />
      ))}
    </ul>
  );
};

export default Todos;
