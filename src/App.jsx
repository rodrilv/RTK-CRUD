import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  const taskState = useSelector((state) => state.tasks);
  return (
    <>
      <h2>Task App</h2>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
