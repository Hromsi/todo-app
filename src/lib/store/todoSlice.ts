import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ITodo {
    id: string,
	text: string,
	completed: boolean,
}

const TODOS = [
	{
		id: '1',
		text: 'Накормить кошку',
		completed: true,
	},
	{
		id: '2',
		text: 'Почитать книгу',
		completed: true,
	},
	{
		id: '3',
		text: 'Повесить белье',
		completed: false,
	},
	{
		id: '4',
		text: 'Пропылесосить',
		completed: false,
	},
	{
		id: '5',
		text: 'Позаниматься музыкой 45 минут',
		completed: false,
	},
];

export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: TODOS as ITodo[],
	},
	reducers: {
		addTodo(state, action: PayloadAction<{ text: string }>) {
			state.todos.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			});
		},
		removeTodoById(state, action:  PayloadAction<string>) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
		},
		toggleTodoComplete(state, action:  PayloadAction<string>) {
			const toggledTodo = state.todos.find(todo => todo.id === action.payload);
			toggledTodo!.completed = !toggledTodo!.completed;
		},
	}
});

export const { addTodo, removeTodoById, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;