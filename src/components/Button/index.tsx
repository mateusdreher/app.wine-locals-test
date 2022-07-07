import { ButtonType } from "../../types/button.type";
import { ButtonAdd } from "./ButtonAdd";
import { ButtonDefault } from "./ButtonDefault";

export function Button(props: ButtonType) {
	function teste() {
		console.log('asndjasndans')
	}
	if (props.type === 'add') {
		return <ButtonAdd {...props} />
	}
	else {
		return <ButtonDefault 
			text={props.text} 
			onClick={props.onClick} 
		/>
	}
}