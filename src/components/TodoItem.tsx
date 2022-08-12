import styles from "./TodoItem.module.css";

interface TodoItemProps {
  id: string;
  text: string;
  onRemove: (id: string) => void;
  children?: React.ReactNode;
}

const TodoItem = ({ text, onRemove, id }: TodoItemProps) => {
  return (
    <li onClick={onRemove.bind(null, id)} className={styles.item}>
      {text}
    </li>
  );
};

export default TodoItem;
