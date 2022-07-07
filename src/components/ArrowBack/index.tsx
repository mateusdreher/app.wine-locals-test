import { useState } from 'react';
import styles from './styles.module.scss';

export function ArrowBack() {

	function goBack() {
		if(window.location.pathname !== '/' && window.location.pathname !== '/login') {
			window.history.back();
		}
		
	}
	return (
		<div className={styles.arrowBack} onClick={goBack}>
			<i className="material-icons">arrow_back</i>
		</div>
	)
	
}