export interface IPokedeets {
	id: number;
	name: string;
	abilities: IAbilities;
}

export interface IAbility {
	url: string;
	name: string;
}

export interface IAbilities {
	slot: string;
	is_hidden: string;
	ability: IAbility[];
}

export class Pokedeets implements IPokedeets {
	constructor(
		public id: number,
		public name: string,
		public abilities: IAbilities) {}

}