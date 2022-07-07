import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dishes } from "./Dishes";
import { NewDish } from "./NewDish";
import { Restaurants } from "./Restaurants";

export function Pages() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Restaurants />} />
				<Route path="/dishes/:restaurant_id" element={<Dishes />} />
				<Route path="/dishes/:restaurant_id/new" element={<NewDish />} />
			</Routes>
		</BrowserRouter>	
	)
}