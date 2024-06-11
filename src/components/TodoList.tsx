'use client';

import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { RootState } from '@/lib/store/store';

const TodoList = ({ title, isCompleted }: { title: string, isCompleted: boolean }) => {
	const todos = useSelector((state: RootState) => state.todos.todos);
	const filteredTodos = todos.filter(todo => todo.completed == isCompleted);

	return (
		<div className="card__todo-items">
			<h2 className="card__title">{title} - {filteredTodos.length}</h2>
			<ul className="card__list">
				{filteredTodos.map((todo) => (
					<TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed}/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;