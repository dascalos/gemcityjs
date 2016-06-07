import { bootstrap } from 'angular2/platform/browser';
import { Provider, provide } from 'angular2/core';
import { AppComponent } from './app.component';


bootstrap(AppComponent)
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));

