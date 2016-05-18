export interface IRawPoke {
	name: string;
	resource_uri: string;
}

export class RawPoke implements IRawPoke {
	constructor(
		public name: string,
		public resource_uri: string) {}
}

export interface IPokemon {
	id: number;
	name: string;
	resourceUri: string;
	imageUrl: string;
}

export class Pokemon implements IPokemon {
	constructor(
		public id: number,
		public name: string,
		public resourceUri: string,
		public imageUrl: string) { }
}