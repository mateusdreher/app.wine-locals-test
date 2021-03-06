import { useState } from "react";
import { useAlert } from "react-alert";
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
	const alert = useAlert();

	function createDish() {
		if (!inputName || !inputDescription || !inputValue) {
			alert.info('Verifique os campos e tente novamente!');
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
				alert.success('Prato criado com sucesso!');
				navigate(`/dishes/${restaurant_id}`)
			})
			.catch(exception => {
				alert.error('Erro ao criar o prato')
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
					onKeyUp={(e) => e.key === 'Enter' && createDish()}
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
					onKeyUp={(e) => e.key === 'Enter' && createDish()}
					currency={true}
				/>
			</div>
				<div className="row">
					<TextArea 
						label="Descri????o do Prato"
						id="dishDescription"
						name="dishDescription"
						value={inputDescription}
						onChange={(event) => setInputDescription(event.target.value)}
						onKeyUp={(e) => e.key === 'Enter' && createDish() }
					/>
					<label>*A descri????o deve conter at?? 200 caracteres.</label>
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