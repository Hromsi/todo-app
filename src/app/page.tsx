'use client';

import styles from './page.module.css';
import { useState } from 'react';

interface ITodo {
	id: string,
	text: string,
	completed: boolean,
}

export default function Home() {
	const [text, setText] = useState('');
	const [todos, setTodos] = useState<ITodo[]>([]);

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

	return (
		<main className={styles.main}>
			<div className="App">
				<label>
					<input 
						placeholder="new todo"
						value={text} 
						onChange={e => setText(e.target.value)}
					/>
					<button onClick={() => addTodo(text)}>Add Todo</button>
				</label>
				<ul>
					{todos.map((todo) => (
						<li key={todo.id}>
							<input 
								type="checkbox" 
								checked={todo.completed} 
								onChange={() => toggleTodoComplete(todo.id)}
							/>
							<span>{todo.text}</span>
							<span className="delete" onClick={() => removeTodo(todo.id)}>
								&times;
							</span>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
} 
