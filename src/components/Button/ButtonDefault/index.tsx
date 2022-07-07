import { ButtonType } from '../../../types/button.type';
import styles from '../styles.module.scss';

export function ButtonDefault(props: ButtonType) {
	function cacete() {
		console.log('caccete')
	}
	return (
		<a 
			className={
				styles.button  +
				" waves-effect waves-light btn " + 
				styles.default}
				onClick={props.onClick}
		>
			{props.text}
		</a>
	)
}