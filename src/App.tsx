import { useContext } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { TodosContext } from "./store/todos-context";

function App() {
  const { items: todos, addTodo, removeTodo } = useContext(TodosContext);

  return (
    <>
      <NewTodo onSubmit={addTodo} />
      <Todos items={todos} onRemove={removeTodo} />
    </>
  );
}

export default App;
