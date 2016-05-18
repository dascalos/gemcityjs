import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import { IRawPoke } from './pokemon';

//{"name": "doduo", "resource_uri": "api/v1/pokemon/84/"}

@Injectable()
export class PokemonService {
	private _pokeUrl = 'http://pokeapi.co/api/v1/pokedex/1';
	constructor(private _http: Http) { }

  getPokedex(): Observable<IRawPoke[]> {
		return this._http.get(this._pokeUrl)
			.map((response: Response) => <IRawPoke[]>response.json().pokemon)
//	  	.do(data => console.log(JSON.stringify(data)))
			.catch(this.handleError);
  };

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

