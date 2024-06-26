'use client';

import React from 'react';
import styles from './styles.module.scss';

const BackgroundAnimation = () => {
	return (
		<div className={styles.area}>
			<ul className={styles.circles}>
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
		</div>
	);
};

export default BackgroundAnimation;