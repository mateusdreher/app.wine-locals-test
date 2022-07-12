import { useEffect, useState } from "react";
import { CardType } from "../../../types/card.type";
import styles from '../styles.module.scss';
import { Request } from '../../../utils/axios.utils';

export function CardRestaurant(props: CardType) {
	const [ dishes, setDishes ] = useState<number>(0);
	const stars: number[] = [];
	let half_star: boolean = false;


	useEffect(() => {
		Request({url: `/dishes/restaurant/${props._id}`})
			.then(response => {
				setDishes(response.data.length);
			})
	}, [])

	for (let i=1; i<=5; i++) {
		if (props.rating && i <= props.rating) {
			stars.push(1);
		}
		else {
			if (props.rating && props.rating % 1 && !isNaN(props.rating % 1) && !half_star) {
				stars.push(0.5);
				half_star = true;
			}
			else {
				stars.push(0);
			}
		}
	}
	return (
		<div className={styles.card + ' ' + styles.cardRestaurant}>
			<div className={styles.title}>{props.title}</div>
			<div className={styles.description}>{dishes} pratos</div>
			<div className={styles.stars}>
				{
					stars.map((item, index): any => {
						if (item === 1) {
							return (
								<i className="material-icons" key={index}>star</i>
							)
						}
						if (item === 0.5) {
							return (
								<i className="material-icons" key={index}>star_half</i>
							)
						}
						else {
							return (
								<i className="material-icons" key={index}>star_border</i>
							)
						}
					})
				}
			</div>
		</div>
	)
}