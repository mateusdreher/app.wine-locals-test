import { InputType } from "../../../types/input.type";

export function Input(props: InputType) {
	return (
		<div className="input-field col s12 input-outlined">
    	<input id={props.id} type={props.type} className="validate" value={props.value} onChange={props.onChange} />
    	<label htmlFor={props.id}>{props.label}</label>
    </div>
	)
}