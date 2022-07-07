import { CardType } from "../../../types/card.type";
import styles from '../styles.module.scss';

export function CardDish(props: CardType) {
	return (
		<div className={styles.card + ' ' + styles.cardDish}>
			<div className={styles.title}>{props.title}</div>
			<div className={styles.description}>{props.description}</div>
		</div>
	)
}