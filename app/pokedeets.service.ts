import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import { IPokedeets } from './pokedeets';

@Injectable()
export class PokedeetsService {
	private _pokeUrl = 'http://pokeapi.co/api/v2/pokemon/';
	constructor(private _http: Http) { }

  getPokeDeets(id: number): Observable<IPokedeets> {
		return this._http.get(this._pokeUrl + id)
			.map((response: Response) => <IPokedeets>response.json())
		  	.do(data => console.log(data))
			.catch(this.handleError);
  };

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

