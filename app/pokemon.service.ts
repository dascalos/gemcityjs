import {Injectable} from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import { Pokemon } from './pokemon'

//{"name": "doduo", "resource_uri": "api/v1/pokemon/84/"}

@Injectable()
export class PokemonService {
	constructor(private _http: Http) { }

  getPokedex() {
	  return this._http.get('http://pokeapi.co/api/v1/pokedex/1/')
			.map((response: Response) => this.mapData(response.json().pokemon))
	  	.do(data => console.log(data))
			.catch(this.handleError);
  };

	mapData(data: any): Pokemon[] {
		return data.array.forEach(element => {
			
		});
	};

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

