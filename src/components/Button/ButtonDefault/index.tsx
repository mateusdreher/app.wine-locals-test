import styles from '../styles.module.scss';

export function ButtonDefault() {
	return (
		<a className={styles.button  +" waves-effect waves-light btn " + styles.default}>button</a>
	)
}