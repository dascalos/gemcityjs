interface IPokemon {
//	id: number;
	name: string;
	resourceUri: string;
	imageUrl(): string;
}

export class Pokemon implements IPokemon {
	constructor(
//		public id: number,
		public name: string,
		public resourceUri: string) { }

	imageUrl(): string {
		return "http://pokeapi.co/media/img/79.png";
	}
}