interface IPokemon {
//	id: number;
	name: string;
	resource_uri: string;
	imageUrl(): string;
}

export class Pokemon implements IPokemon {
	constructor(
//		public id: number,
		public name: string, 
		public resource_uri: string) { }
		
	imageUrl(): string {
		return "http://pokeapi.co/media/img/79.png"; 
	}	
}