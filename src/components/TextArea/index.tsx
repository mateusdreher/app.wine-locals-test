import { InputType } from "../../types/input.type";
import styles from './style.module.scss';

export function TextArea(props: InputType) {
	return (
		<div className={"input-field col s12 " + styles.textarea}>
      <textarea id={props.id} className="materialize-textarea" value={props.value} onChange={props.onChange} maxLength={200}></textarea>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
	)
}