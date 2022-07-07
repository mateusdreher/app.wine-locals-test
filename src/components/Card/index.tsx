import { CardType } from "../../types/card.type";
import { CardDish } from "./CardDish";
import { CardRestaurant } from "./CardRestaurant";

export function Card(props: CardType) {
	if(props.type === 'dish') {
		return <CardDish {...props} />
	}
	else {
		return <CardRestaurant {...props}></CardRestaurant>
	}
}