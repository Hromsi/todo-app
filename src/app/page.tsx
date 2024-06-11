'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/lib/store/todoSlice';
import TodoList from '@/components/TodoList';
import InputField from '@/components/InputField/index';

export default function Home() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Dispatches the addTodo action if text is not empty, then clears the input field.
		if (text !== '') {
			dispatch(addTodo({ text }));
			setText('');
		}
	};

	return (
		<main>
			<div className="card">
				<form className="card__wrapper" onSubmit={submit}>
					<InputField value={text} handleInput={setText}/>
					<TodoList title="Задачи для выполнения" isCompleted={false}/>
					<TodoList title="Выполнено" isCompleted={true}/>
				</form>
			</div>
		</main>
	);
} 
