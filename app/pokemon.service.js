"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Rx_1 = require('rxjs/Rx');
//{"name": "doduo", "resource_uri": "api/v1/pokemon/84/"}
var Pokemon = (function () {
    function Pokemon(name, resource_uri) {
        this.name = name;
        this.resource_uri = resource_uri;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var PokemonService = (function () {
    function PokemonService(_http) {
        this._http = _http;
    }
    PokemonService.prototype.getPokedex = function () {
        return this._http.get('http://pokeapi.co/api/v1/pokedex/1/')
            .map(function (response) {
            var allPokemon = response.json().pokemon.slice(0, 19);
            return allPokemon;
        })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    ;
    PokemonService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    PokemonService = __decorate([
        core_1.Injectable()
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;
