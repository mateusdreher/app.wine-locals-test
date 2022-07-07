export type CardType = {
	title: string;
	description: string;
	title2?: string;
	type: 'restaurant' | 'dish';
	rating?: number;
	_id?: string;
}