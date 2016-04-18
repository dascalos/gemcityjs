import { Component } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { HTTP_PROVIDERS } from 'angular2/http';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'my-pokemon',
  templateUrl: 'app/pokemon.component.html',
  providers: [HTTP_PROVIDERS, PokemonService]
})
export class PokemonComponent {
	errorMessage: string;
	allPokemons: Pokemon[];
	viewPokemons: Observable<Pokemon[]>;
	constructor(private _pokemonService: PokemonService) { }
	
	ngOnInit() { 
		this.getAllPokemon();
		//this.loadFirstPage(); 
	}
	
	getAllPokemon() {
		this.viewPokemons = this._pokemonService.getPokedex();
	}
	
	loadFirstPage() {
		for (var z = 0; z < 20; z++) {
			this.viewPokemons.push(this.allPokemons[z]);
		}
	}
	
}



