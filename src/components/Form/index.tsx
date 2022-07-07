import { useState } from "react";
import { useParams } from "react-router-dom";
import { FormType } from "../../types/form.type";
import { Button } from "../Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

export function Form() {
	const [inputName, setInputName ] = useState<string>();
	const [inputDescription, setInputDescription ] = useState<string>();
	const [inputValue, setInputValue ] = useState<string>();
	const { restaurant_id } = useParams();

	function createDish() {
		if (!inputName || !inputDescription || !inputValue) {
			return;
		}
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
	 	}
		const body = {
			restaurant_id: restaurant_id,
			name: inputName,
			description: inputDescription,
			value: parseInt(inputValue.toString())
		};

		const options = {
			method: 'POST',
			headers,
			body: JSON.stringify(body)
		}
		fetch('http://localhost:3000/dishes/new', options)
			.then(response => response.json())
				.then(data => {
					console.log(data);
		})
	}

	return (
		<div className="row">
			<form className="col s12">
			<div className="row">
				<Input 
					label="Nomde do Prato"
					id="dishName"
					type="text"
					name="dishName"
					value={inputName}
					onChange={(event) => setInputName(event.target.value)}
				/>
			</div>
			<div className="row">
				<Input 
					label="Valor"
					id="dishvalue"
					type="text"
					name="dishvalue"
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
				/>
			</div>
				<div className="row">
					<TextArea 
						label="Descrição do Prato"
						id="dishDescription"
						name="dishDescription"
						value={inputDescription}
						onChange={(event) => setInputDescription(event.target.value)}
					/>
					<label>*A descrição deve conter até 200 caracteres.</label>
				</div>

				<Button 
					text="Adicionar"
					type="button"
					onClick={() => createDish()}
				/>
			</form>
		</div>
	)
}