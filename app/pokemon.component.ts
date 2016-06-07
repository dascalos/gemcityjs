import { Component, OnInit } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable } from 'rxjs/Rx';
import { HTTP_PROVIDERS } from 'angular2/http';

import { PokedeetsComponent } from './pokedeets.component';
import { PokemonService } from './pokemon.service';
import { IPokemon, Pokemon, IRawPoke } from './pokemon';
import _ from 'lodash';

@Component({
  selector: 'pokedex',
  templateUrl: 'app/pokemon.component.html',
  styleUrls: ['app/pokemon.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, PokemonService]
})
export class PokemonComponent implements OnInit {
	private _favoritePokeKey = "favepoke";
	errorMessage: string;
	rawPokemons: IRawPoke[];
	allPokemons: IPokemon[];
	viewPokemons: IPokemon[];
	currentPage: number = 1;
	constructor(
		private _router: Router,
		private _pokemonService: PokemonService) { }

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
		
		// get a list of favorites
		var favePokeArray = localStorage.getItem(this._favoritePokeKey);
		let fpa: number[] = JSON.parse(favePokeArray ? favePokeArray : []);
		
		_.forEach(this.rawPokemons, (value) => {
			var id = +value.resource_uri.split('/')[3];
			if (id < 10000) {
				var poke = new Pokemon(id, value.name, value.resource_uri, `http://pokeapi.co/media/img/${id}.png`, _.indexOf(fpa, id) !== -1);
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
	
	favorite(pokemon: Pokemon): void {
		// pull int array from local storage
		var favePokeArray = localStorage.getItem(this._favoritePokeKey);
		
		// localstorage cache miss
		if (!favePokeArray) {
			let tfpa: number[] = [];
			tfpa.push(pokemon.id);
			localStorage.setItem(this._favoritePokeKey, JSON.stringify(tfpa));
			pokemon.favorite = true;
			return;
		}
		
		// convert from string to number[]
		let fpa: number[] = JSON.parse(favePokeArray);
		
		// check if this item already is in local storage
		let pokemonIndex: number = _.indexOf(fpa, pokemon.id);
		if (pokemonIndex === -1) {
			// add if not already in array
			fpa.push(pokemon.id);
			pokemon.favorite = true;
		} else {
			// remove if it is already favorite
			fpa = _.remove(fpa, function(n) { return n !== pokemon.id });
			pokemon.favorite = false;
		}
		
		// write back to local storage
		localStorage.setItem(this._favoritePokeKey, JSON.stringify(fpa));
		// update UI
	}
}



