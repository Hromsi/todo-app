'use client';

import { useDispatch } from 'react-redux';
import { removeTodoById, toggleTodoComplete } from '@/lib/store/todoSlice';

const TodoItem = ({ id, text, completed }: { id: string, text: string, completed: boolean }) => {
	const dispatch = useDispatch();
  
	return (
		<li key={id} className="card__item-wrapper">
			<p className={'card__item-text' + (completed ? ' card__item-text_completed' : '')}>{text}</p>
			<div className="card__item-actions">
				<button 
					className={`button ${completed ? 'icon-cancel' : 'icon-checkmark'}`} 
					onClick={() => dispatch(toggleTodoComplete(id))}
				/>
				<button 
					className="button icon-urn" 
					onClick={() => dispatch(removeTodoById(id))}
				/>
			</div>
		</li>
	);
};

export default TodoItem;
