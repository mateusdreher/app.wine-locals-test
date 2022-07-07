import { InputType } from "../../../types/input.type";

export function TextArea(props: InputType) {
	return (
		<div className="input-field col s12">
      <textarea id={props.id} className="materialize-textarea"></textarea>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
	)
}