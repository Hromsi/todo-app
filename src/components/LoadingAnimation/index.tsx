import React from 'react';
import './styles.scss';

const LoadingAnimation: React.FC = () => {
	return (
		<div className="spinner-container">
			<div className="spinner">
				<div className="spinner-circle spinner-circle-outer"></div>
				<div className="spinner-circle-off spinner-circle-inner"></div>
				<div className="spinner-circle spinner-circle-single-1"></div>
				<div className="spinner-circle spinner-circle-single-2"></div>
				<div className="text">...Загрузка...</div>
			</div>
		</div>
	);
};

export default LoadingAnimation;