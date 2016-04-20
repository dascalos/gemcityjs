export class Pokemon {
	imageUrl: string;
	constructor(public name: string, public resource_uri: string) {
		this.imageUrl = `http://pokeapi.co/media/img/${resource_uri.split("/")[3]}.png`;
	 }
}