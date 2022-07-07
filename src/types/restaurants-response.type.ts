import { DishesResponseType } from "./dishes-response.type";

export type RestaurantsResponseType = {
	_id: string;
	name: string;
	rating: number;
	dishes?: DishesResponseType[];
}