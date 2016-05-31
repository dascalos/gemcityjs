import { Component } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { HTTP_PROVIDERS } from 'angular2/http';
import { PokemonService } from './pokemon.service';
import { IPokemon, Pokemon, IRawPoke } from './pokemon';
import _ from 'lodash';

@Component({
  selector: 'my-pokemon',
  templateUrl: 'app/pokemon.component.html',
  styleUrls: ['app/pokemon.component.css'],
  providers: [HTTP_PROVIDERS, PokemonService]
})
export class PokemonComponent {
	private _favoritePokeKey = "favepoke";
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
			error => this.errorMessage = <any>error,
			() => this.sortPoke());
	}

	sortPoke() {
		this.allPokemons = [];
		_.forEach(this.rawPokemons, (value) => {
			var id = +value.resource_uri.split('/')[3];
			if (id < 10000) {
				var poke = new Pokemon(id, value.name, value.resource_uri, `http://pokeapi.co/media/img/${id}.png`);
				this.allPokemons.push(poke);
			}
		});
		this.viewPokemons = _.sortBy(this.allPokemons, function (z) { return z.id });
		//console.log(this.viewPokemons);
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



