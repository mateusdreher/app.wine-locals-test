import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Request } from '../../utils/axios.utils';


export function NewDish() {
	const [inputName, setInputName ] = useState<string>();
	const [inputDescription, setInputDescription ] = useState<string>();
	const [inputValue, setInputValue ] = useState<string>('');
	const { restaurant_id } = useParams();
	const navigate = useNavigate();

	function createDish() {
		if (!inputName || !inputDescription || !inputValue) {
			return;
		}
		const body = {
			restaurant_id: restaurant_id,
			name: inputName,
			description: inputDescription,
			value: onlyNumbers()
		};

		Request({url: `/dishes/new`, method: 'post', data: body})
			.then(response => {
				navigate(`/dishes/${restaurant_id}`)
			})
	}

	function onlyNumbers() {
		let splited = inputValue.split(' ')[1];
		splited = splited.replace('.', '');
		splited = splited.replace(',', '.')

		return parseFloat(splited);
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
					currency={true}
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