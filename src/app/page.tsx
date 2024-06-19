'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setTodos } from '@/lib/store/todoSlice';
import TodoList from '@/components/TodoList';
import InputField from '@/components/InputField/index';
import { loadFromLocalStorage } from '@/lib/store/utils';
import LoadingAnimation from '@/components/LoadingAnimation';

export default function Home() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	

	useEffect(() => {
		setIsLoading(true);
		const initialTodos = loadFromLocalStorage();
		dispatch(setTodos(initialTodos));
		setTimeout(() => setIsLoading(false), 2000);
	}, []);
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
				{isLoading ? <LoadingAnimation/> : <form className="card__wrapper" onSubmit={submit}>
					<InputField value={text} handleInput={setText}/>
					<TodoList title="Задачи для выполнения" isCompleted={false}/>
					<TodoList title="Выполнено" isCompleted={true}/>
				</form>}
			</div>
		</main>
		// </>
	);
} 
