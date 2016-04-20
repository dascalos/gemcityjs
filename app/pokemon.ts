export class Pokemon {
	constructor(public name: string, public resource_uri: string) { }
	imageUrl: string = `http://pokeapi.co/media/img/${this.resource_uri.split("/")[3]}.png`;
}