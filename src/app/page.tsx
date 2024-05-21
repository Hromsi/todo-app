'use client';

import styles from './page.module.css';
import { useState } from 'react';

interface ITodo {
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

export default function Home() {
	const [text, setText] = useState('');
	const [todos, setTodos] = useState<ITodo[]>(TODOS);

	const addTodo = (text: string) => {
		const newTodo = {
			id: new Date().toISOString(),
			text: text,
			completed: false,
		};
		setText('');
		setTodos(prev => [...prev, newTodo]);
	};

	const toggleTodoComplete = (id: string) => {
		setTodos(todos.map(todo => todo.id === id? { ...todo, completed:!todo.completed } : todo
		));
	};

	const removeTodo = (id: string) => {
		const newTodos = todos.filter(todo => todo.id !== id);
		setTodos(newTodos);
	};

	const tasksToDo = todos.filter(todo => !todo.completed).length;
	const completedTasks = todos.filter(todo => todo.completed).length;

	return (
		<main className={styles.main}>
			<div className="App">
				<label>
					<input 
						placeholder="new todo"
						value={text} 
						onChange={e => setText(e.target.value)}
					/>
					<button onClick={() => addTodo(text)}><img src="/plus.svg" width="25" height="25"/></button>
				</label>
				<h2>Tasks to do - {tasksToDo}</h2>
				<ul>
					{todos.map((todo) => (
						!todo.completed && 
						<li key={todo.id}>
							<span>{todo.text}</span>
							<button className="check-todo" onClick={() => toggleTodoComplete(todo.id)}><img src="/checkmark.svg" width="25" height="25"/></button>
							<button className="delete" onClick={() => removeTodo(todo.id)}><img src="/urn.svg" width="25" height="25"/></button>
						</li>
					))}
				</ul>
				<h2>Done - {completedTasks}</h2>
				<ul>
					{todos.map((todo) => (
						todo.completed && 
						<li key={todo.id}>
							<span className="completed">{todo.text}</span>
							<button className="cancel-todo" onClick={() => toggleTodoComplete(todo.id)}><img src="/cancel.svg" width="25" height="25"/></button>
							<button className="delete" onClick={() => removeTodo(todo.id)}><img src="/urn.svg" width="25" height="25"/></button>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
} 
