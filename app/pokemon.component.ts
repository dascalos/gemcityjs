import { Component } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { HTTP_PROVIDERS } from 'angular2/http';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon'

@Component({
  selector: 'my-pokemon',
  templateUrl: 'app/pokemon.component.html',
  providers: [HTTP_PROVIDERS, PokemonService]
})
export class PokemonComponent {
	errorMessage: string;
	allPokemons: Observable<Pokemon[]>;
	viewPokemons: Observable<Pokemon[]>;
	currentPage: number = 1;
	constructor(private _pokemonService: PokemonService) { }

	ngOnInit() {
		this.getAllPokemon();
	}

	getAllPokemon() {
		this.allPokemons = this._pokemonService.getPokedex();
		this.loadPage(1);
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



