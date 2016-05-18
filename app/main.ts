import { bootstrap } from 'angular2/platform/browser';
import { Provider, provide } from 'angular2/core';
import { PokemonComponent } from './pokemon.component';
// import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage/angular-2-local-storage';

// Create config options (see ILocalStorageServiceConfigOptions) for deets:
// let localStorageServiceConfig = {
//   prefix: 'pokemon',
//   storageType: 'sessionStorage'
// };
// Provide the config to the service:
// const LOCAL_STORAGE_CONFIG_PROVIDER: Provider = provide(LOCAL_STORAGE_SERVICE_CONFIG, {
//   useValue: localStorageServiceConfig
// });

bootstrap(PokemonComponent
// ,[LocalStorageService, LOCAL_STORAGE_CONFIG_PROVIDER]
)
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));

