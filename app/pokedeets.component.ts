import { Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { PokedeetsService } from './pokedeets.service';
import { Pokedeets, IPokedeets } from './pokedeets';

@Component({
	selector: 'pokedeets',
	templateUrl: 'app/pokedeets.component.html',
	styleUrls: ['app/pokedeets.component.css'],
	providers: [HTTP_PROVIDERS, PokedeetsService]
})
export class PokedeetsComponent implements OnInit {
	@Input() pokedeets: Pokedeets;
	errorMessage: string;
	
	constructor(
		private _routeParams: RouteParams,
		private _pokeDeetsService: PokedeetsService
	) {	}
	
	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._pokeDeetsService.getPokeDeets(id)
			.subscribe(z => this.pokedeets = z);
	}
	
	goBack() {
		window.history.back();
	}

	imageUrl(): string {
		let id = +this._routeParams.get('id');
		return `http://pokeapi.co/media/img/${id}.png`;
	}
}