'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodoById, toggleTodoComplete } from '@/lib/store/todoSlice';
import { RootState } from '@/lib/store/store';

export default function Home() {
	const [text, setText] = useState('');
	const [isError, setIsError] = useState(false);
	const todos = useSelector((state: RootState) => state.todos.todos);
	const dispatch = useDispatch();
	

	const addTask = () => {
		if (text === '') {
			setIsError(true);
			return;
		}
		setIsError(false);
		dispatch(addTodo({ text }));
		setText('');
	};

	const tasksToDo = todos.filter(todo => !todo.completed).length;
	const completedTasks = todos.filter(todo => todo.completed).length;


	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addTask();
	};

	return (
		<>
			<main className="main context">
				<div className="card">
					<form onSubmit={submit} style={{ width: '100%' }}>
						<div className="control">
							<div className="field">
								<input 
									className={'input' + `${isError ? ' input_error' : ''}`}
									placeholder="Добавить новую задачу"
									value={text} 
									onChange={(e) => {
										setText(e.target.value);
										setIsError(false);
									}}
								/>
								<button className="button" type="submit"><img src="/plus.svg"/></button>
							</div>
							{isError ? <span className="control__error">Поле не может быть пустым. Пожалуйста, введите название задачи.</span> : null}
						</div>
						
						
						<div className="task-container">
							<h2 className="task-container__title">Задачи для выполнения - {tasksToDo}</h2>
							<ul className="task-container__list">
								{todos.map((todo) => (
									!todo.completed && 
								<li key={todo.id} className="task-container__item">
									<span className="todo-text">{todo.text}</span>
									<div className="task-container__actions">
										<button className="button" onClick={() => dispatch(toggleTodoComplete(todo.id))}><img src="/checkmark.svg"/></button>
										<button className="button" onClick={() => dispatch(removeTodoById(todo.id))}><img className="custom-svg-icon" src="/urn.svg"/></button>
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
										<button className="button icon-cancel" onClick={() => dispatch(toggleTodoComplete(todo.id))}></button>
										<button className="button" onClick={() => dispatch(removeTodoById(todo.id))}><img src="/urn.svg"/></button>
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
