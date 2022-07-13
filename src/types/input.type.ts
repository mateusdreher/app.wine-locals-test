export type InputType = {
	type?: string;
	label: string;
	id: string;
	name: string;
	value?: any;
	onChange: (event: any) => void;
	onKeyUp?: (event: any) => void;
	currency?: boolean;
}