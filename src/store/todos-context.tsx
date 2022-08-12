import React, { useState, useMemo, useCallback } from "react";
import Todo from "../models/todo";

interface ContextInterface {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<ContextInterface>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((text: string) => {
    setTodos((currTodos) => [...currTodos, new Todo(text)]);
  }, []);

  const removeTodo = useCallback((id: string) => {
    setTodos((currTodos) =>
      currTodos.filter((item) => {
        return item.id !== id;
      })
    );
  }, []);

  const value = useMemo(
    () => ({
      items: todos,
      addTodo,
      removeTodo,
    }),
    [todos, removeTodo, addTodo]
  );

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export default TodosContextProvider;
