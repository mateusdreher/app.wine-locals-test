import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dishes } from "./Dishes";
import { NewDish } from "./NewDish";
import { Restaurants } from "./Restaurants";

export function Pages() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Restaurants />} />
				<Route path="/dishes" element={<Dishes />} />
				<Route path="/dishes/new" element={<NewDish />} />
			</Routes>
		</BrowserRouter>	
	)
}