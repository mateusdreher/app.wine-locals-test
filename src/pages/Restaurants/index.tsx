import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { RestaurantsResponseType } from '../../types/restaurants-response.type';
import styles from './styles.module.scss';
import { Request } from '../../utils/axios.utils';

export function Restaurants() {
	const [ restaurants, setRestaurants ] = useState<RestaurantsResponseType[]>([]);

	useEffect(() => {
		Request({url: '/restaurants'})
			.then(response => {
				setRestaurants(response.data);
			})
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.title}>Lugares</div>
			<div className={styles.subtitle}>{restaurants.length} lugares cadastrados</div>
			{
				restaurants.map((item): any => {
					return (
						<div className={styles.row} key={item._id}>
							<Link to={`/dishes/${item._id}`}>
								<Card 
									title={item.name}
									description={item.rating.toString()}
									rating={item.rating}
									type="restaurant"
									_id={item._id}
								/>
							</Link>
							
							<Link to={`/dishes/${item._id}/new`}>
								<Button 
									text=""
									type="add"
									outline={true}
								/>
							</Link>
							
						</div>
						
					)

				})
			}
			
		</div>
	)
}