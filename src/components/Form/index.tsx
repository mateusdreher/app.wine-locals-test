import { Button } from "../Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

export function Form() {
	return (
		<div className="row">
			<form className="col s12">
			<div className="row">
				<Input 
					label="Nomde do Prato"
					id="dishName"
					type="text"
					name="dishName"
				/>
			</div>
			<div className="row">
				<Input 
					label="Valor"
					id="dishvalue"
					type="text"
					name="dishvalue"
				/>
			</div>
				<div className="row">
					<TextArea 
						label="Descrição do Prato"
						id="dishDescription"
						name="dishDescription"
					/>
					<label>*A descrição deve conter até 200 caracteres.</label>
				</div>

				<Button 
					text="Adicionar"
					type="button"
				/>
			</form>
		</div>
	)
}