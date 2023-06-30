import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, task: "Task 1", description: "My description 1", completed: false },
  { id: 2, task: "Task 2", description: "My description 2", completed: false },
  { id: 3, task: "Task 3", description: "My description 3", completed: false },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
