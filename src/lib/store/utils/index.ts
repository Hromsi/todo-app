'use client';

import { ITodo } from '../todoSlice';

export function loadFromLocalStorage(): ITodo[] {
	const storedTodos = localStorage.getItem('todos');
	if (storedTodos && storedTodos !== '[]') {
		return JSON.parse(storedTodos);
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

	return TODOS;
}

export function getFromLocalStorage<T>(key: string): T | null {
	if (typeof window !== 'undefined') {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	}
	return null;
}

export function saveToLocalStorage(todos: ITodo[]): void {
	localStorage.setItem('todos', JSON.stringify(todos));
}