import { ButtonType } from "../../types/button.type";
import { ButtonAdd } from "./ButtonAdd";
import { ButtonDefault } from "./ButtonDefault";

export function Button(props: ButtonType) {
	if (props.type === 'add') {
		return <ButtonAdd />
	}
	else {
		return <ButtonDefault />
	}
}