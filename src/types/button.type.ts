export type ButtonType = {
	text: string;
	type?: 'add' | 'button';
	outline?: boolean;
	onClick?: () => void;
}