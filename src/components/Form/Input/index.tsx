import { InputType } from "../../../types/input.type";
import styles from './style.module.scss';
import NumberFormat from 'react-number-format';

export function Input(props: InputType) {
	
	if (props.currency) {
		return (
			<div className={"input-field col s12 input-outlined " + styles.input}>
				<NumberFormat 
					thousandSeparator={'.'}
					decimalSeparator={','} 
					decimalScale={2}
					fixedDecimalScale={true}
					prefix={'R$ '} 
					value={props.value}
					onChange={props.onChange}
					id={props.id} 
				/>
				<label htmlFor={props.id}>{props.label}</label>
			</div>
		)
	}
	
	return (
		<div className={"input-field col s12 input-outlined " + styles.input}>
	
			<input
				id={props.id} 
				type={props.type} 
				className="validate" 
				value={
					props.value
				} 
				onChange={props.onChange} 
			/>
    	<label htmlFor={props.id}>{props.label}</label>
    </div>
	)
}