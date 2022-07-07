import { ButtonType } from '../../../types/button.type';
import styles from '../styles.module.scss';

export function ButtonDefault(props: ButtonType) {
	return (
		<a className={styles.button  +" waves-effect waves-light btn " + styles.default}>{props.text}</a>
	)
}