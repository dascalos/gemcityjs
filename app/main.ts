import { bootstrap } from 'angular2/platform/browser';
import { Provider, provide } from 'angular2/core';
import { PokemonComponent } from './pokemon.component';

bootstrap(PokemonComponent)
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));

