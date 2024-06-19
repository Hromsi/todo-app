'use client';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { saveToLocalStorage } from './utils/index';

export interface ITodo {
    id: string,
	text: string,
	completed: boolean,
}

export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [] as ITodo[],
	},
	reducers: {
		setTodos: (state, action: PayloadAction<ITodo[]>) => {
			state.todos = action.payload;
			saveToLocalStorage(state.todos);
		},
		addTodo(state, action: PayloadAction<{ text: string }>) {
			const newTodo = {
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			};
			state.todos.push(newTodo);
			saveToLocalStorage(state.todos);
		},
		removeTodoById(state, action:  PayloadAction<string>) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
			saveToLocalStorage(state.todos);
		},
		toggleTodoComplete(state, action:  PayloadAction<string>) {
			const toggledTodo = state.todos.find(todo => todo.id === action.payload);
			toggledTodo!.completed = !toggledTodo!.completed;
			saveToLocalStorage(state.todos);
		},
	},
});

export const { setTodos, addTodo, removeTodoById, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;