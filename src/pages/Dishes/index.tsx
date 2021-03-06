import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { DishesResponseType } from "../../types/dishes-response.type";
import { RestaurantsResponseType } from "../../types/restaurants-response.type";
import styles from './styles.module.scss';
import { Request } from '../../utils/axios.utils';

export function Dishes() {
	const { restaurant_id } = useParams();
	const [ dishes, setDishes ] = useState<DishesResponseType[]>([]);
	const [ restaurantInfo, setRestaurantInfo ] = useState<RestaurantsResponseType>();
	
	useEffect(() => {
		Request({url: `/dishes/restaurant/${restaurant_id}`})
			.then(response => {
				setDishes(response.data);
			})
		
		Request({url: `/restaurants/${restaurant_id}`})
		.then(response => {
			setRestaurantInfo(response.data);
		})

	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.title}>{restaurantInfo?.name}</div>
			<div className={styles.subtitle}>{dishes.length} pratos</div>
			{
				dishes.map((item): any => {
					return (
						<Card 
							key={item._id}
							title={item.name}
							title2={`R$ ${item.value}`}
							description={item.description}
							type="dish"
						/>
					)
				})
			}
			<div className={styles.button}>
				<Link to={`/dishes/${restaurant_id}/new`}>
					<Button 
						text=""
						type="add"
					/>
				</Link>
				
			</div>
			
		</div>
	)
}