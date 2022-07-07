import styles from '../styles.module.scss';

export function ButtonAdd() {
	return (
		<a className={styles.button + " btn-floating btn-large waves-effect waves-light"}>
		<i className="material-icons">add</i>
	</a>
	)
}