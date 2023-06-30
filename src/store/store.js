import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
