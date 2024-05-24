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


	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addTodo(text);
	};

	return (
		<>
			<main className="main context">
				<div className="card">
					<form onSubmit={submit}>
						<label className="card__input">
							<input 
								className="input"
								placeholder="Добавить новую задачу"
								value={text} 
								onChange={e => setText(e.target.value)}
							/>
							<button className="button" type="submit"><img src="/plus.svg"/></button>
						</label>
						<div className="task-container">
							<h2 className="task-container__title">Задачи для выполнения -{tasksToDo}</h2>
							<ul className="task-container__list">
								{todos.map((todo) => (
									!todo.completed && 
								<li key={todo.id} className="task-container__item">
									<span className="todo-text">{todo.text}</span>
									<div className="task-container__actions">
										<button className="button" onClick={() => toggleTodoComplete(todo.id)}><img src="/checkmark.svg"/></button>
										<button className="button" onClick={() => removeTodo(todo.id)}><img className="custom-svg-icon" src="/urn.svg"/></button>
									</div>
								</li>
								))}
							</ul>
						</div>
						<div className="task-container">
							<h2 className="task-container__title">Выполнено - {completedTasks}</h2>
							<ul className="task-container__list">
								{todos.map((todo) => (
									todo.completed && 
								<li key={todo.id} className="task-container__item">
									<span className="todo-text_completed">{todo.text}</span>
									<div className="task-container__actions">
										<button className="button icon-cancel" onClick={() => toggleTodoComplete(todo.id)}></button>
										<button className="button" onClick={() => removeTodo(todo.id)}><img src="/urn.svg"/></button>
									</div>
								</li>
								))}
							</ul>
						</div>
					</form>
				</div>
			</main>
			<div className="area" >
				<ul className="circles">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div >
		</>);
} 
