'use-client';

import { useState } from 'react';
import './styles.scss';

interface InputFieldProps { 
	value: string, 
	handleInput: (value: string) => void,
}

const InputField = ({ value, handleInput }: InputFieldProps) => {
	const [isError, setIsError] = useState(false);

	const validateInput = () => {
		if (value === '') {
			setIsError(true);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleInput(e.target.value);
		setIsError(false);
	};

	return (
		<div className="control">
			<div className="control__field">
				<input 
					className={`input ${isError ? ' input_error' : ''}`}
					placeholder="Добавить новую задачу"
					value={value} 
					onChange={handleChange}
					required
				/>
				<button className="button icon-plus" onClick={validateInput} type="submit"/>
			</div>
			{isError ? <p className="control__error-message">Поле не может быть пустым. Пожалуйста, введите название задачи.</p> : null}
		</div>
	);
};
  
export default InputField;