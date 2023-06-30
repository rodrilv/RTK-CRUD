import { useSelector } from "react-redux";
import { useState } from "react";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleTaskChange = ({ target }) => {
    setTask({
      ...task,
      [target.name]: target.value,
    });
  };

  const saveTask = (e) => {
    e.preventDefault();
    console.log(task);
  };

  console.log(tasks);
  return (
    <form onSubmit={saveTask}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleTaskChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleTaskChange}
      />
      <button />
    </form>
  );
};
