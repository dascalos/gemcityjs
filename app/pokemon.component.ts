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
	allPokemons: Pokemon[];
	viewPokemons: Observable<Pokemon[]>;
	currentPage: number = 1;
	constructor(private _pokemonService: PokemonService) { }

	ngOnInit() {
		this.getAllPokemon();
	}

	getAllPokemon() {
		this.allPokemons = this._pokemonService.getPokedex();
		this.viewPokemons = this.allPokemons;
		//this.loadPage(1);
	}

	loadPage(pageNumber: number) {
		let viewPokemons = Observable.create(observer => {
			for (var z = 0; z < 20; z++) {
				var newPokemon = new Pokemon(this.allPokemons[z].name, this.allPokemons[z].resource_uri);
				observer.next(newPokemon);
			}
		}).publish();
		viewPokemons.connect();
	}

	next(): void {
		console.log("next");
	}

	prev(): void {
		console.log("prev");
	}

}



