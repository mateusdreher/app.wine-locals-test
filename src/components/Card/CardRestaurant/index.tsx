import { CardType } from "../../../types/card.type";
import styles from '../styles.module.scss';

export function CardRestaurant(props: CardType) {
	return (
		<div className={styles.card + ' ' + styles.cardRestaurant}>
			<div className={styles.twoTitles}>
				<span className={styles.title}>{props.title}</span>
				<span className={styles.title}>{props.title2}</span>
			</div>
			<div className={styles.description}>{props.description}</div>
		</div>
	)
}