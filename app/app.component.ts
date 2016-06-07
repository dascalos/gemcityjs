import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';

import { PokemonComponent } from './pokemon.component';
import { PokedeetsComponent } from './pokedeets.component';
import { PokemonService } from './pokemon.service';
import { PokedeetsService } from './pokedeets.service';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, PokemonService, PokedeetsService]
})
@RouteConfig([
	{
		path: '/pokemon',
		name: 'Pokemon',
		component: PokemonComponent,
		useAsDefault: true
	},
	{
		path: '/pokedeets/:id',
		name: 'Pokedeets',
		component: PokedeetsComponent,
	}
])
export class AppComponent {
	title = "Gem City JavaScript";
}