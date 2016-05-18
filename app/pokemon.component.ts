import { Component } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { HTTP_PROVIDERS } from 'angular2/http';
import { PokemonService } from './pokemon.service';
import { IPokemon, Pokemon, IRawPoke, RawPoke } from './pokemon'

@Component({
  selector: 'my-pokemon',
  templateUrl: 'app/pokemon.component.html',
  providers: [HTTP_PROVIDERS, PokemonService]
})
export class PokemonComponent {
	errorMessage: string;
	rawPokemons: IRawPoke[];
	allPokemons: IPokemon[];
	viewPokemons: IPokemon[];
	currentPage: number = 1;
	constructor(private _pokemonService: PokemonService) { }

	ngOnInit() {
		this.getAllPokemon();
	}

	getAllPokemon() {
		this._pokemonService.getPokedex()
			.subscribe(
			z => this.rawPokemons = z,
			error => this.errorMessage = <any>error);
		console.log(this.rawPokemons);
		this.loadPage(1);
	}

	sortPoke() {

	}

	loadPage(pageNumber: number) {
		//this.viewPokemons = this.allPokemons.filter
	}

	next(): void {
		console.log("next");
	}

	prev(): void {
		console.log("prev");
	}

}



