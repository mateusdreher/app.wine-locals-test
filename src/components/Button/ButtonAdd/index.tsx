import { ButtonType } from '../../../types/button.type';
import styles from '../styles.module.scss';

export function ButtonAdd(props: ButtonType) {
	return (
		<a className={styles.button + " " + styles.add + " btn-floating btn-large waves-effect waves-light " + (props.outline ? styles.addOutline : '')}>
			<i className="material-icons">add</i>
		</a>
	)
}