import { useState } from 'react';
import styles from './styles.module.scss';

export function ArrowBack() {

	function goBack() {
		window.history.back();
		
	}
	return (
		<div className={styles.arrowBack} onClick={goBack}>
			<i className="material-icons">arrow_back</i>
		</div>
	)
	
}