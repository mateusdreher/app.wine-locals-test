import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Dishes } from "./Dishes";
import { Login } from "./Login";
import { NewDish } from "./NewDish";
import { Restaurants } from "./Restaurants";

function RequireAuth({children}: {children: JSX.Element}, ...rest) {
	let auth = (localStorage.getItem('user_token') && localStorage.getItem('user_token') !== '') ? true : false;
	let location = useLocation();

	if (!auth) {
		return <Navigate to={'/login'} state={{from: location}} replace/>
	}

	return children;
}

export function Pages() {

	return (
		<BrowserRouter>
			<Routes>
				<Route 
					path="/login"
					element={<Login />}
				/>
				<Route 
					path="/" 
					element={
						<RequireAuth>
							<Restaurants />
						</RequireAuth>
					} 
				/>
				<Route 
					path="/dishes/:restaurant_id" 
					element={
						<RequireAuth>
							<Dishes />
						</RequireAuth>
					} 
					/>
				<Route 
					path="/dishes/:restaurant_id/new" 
					element={
						<RequireAuth>
							<NewDish />
						</RequireAuth>
					} 
				/>
			</Routes>
		</BrowserRouter>	
	)
}