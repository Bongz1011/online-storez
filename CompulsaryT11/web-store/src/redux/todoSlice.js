import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, content: "Content1", completed: false },
    { id: 2, content: "Content2", completed: false },
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.list.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
