import React, { useRef } from "react";
import styles from "./NewTodo.module.css";

interface NewTodoProps {
  onSubmit: (text: string) => void;
}

const NewTodo = ({ onSubmit }: NewTodoProps) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }

    onSubmit(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="todoText">Todo Text</label>
      <input type="text" id="todoText" ref={todoTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
