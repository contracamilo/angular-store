// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi: 'http://platzi-store.herokuapp.com/',
  firebase: {
    apiKey: 'AIzaSyC9GBKaSArD7VDcsjanXFE1nXk80onXc_o',
    authDomain: 'cami-store.firebaseapp.com',
    databaseURL: 'https://cami-store.firebaseio.com',
    projectId: 'cami-store',
    storageBucket: 'cami-store.appspot.com',
    messagingSenderId: '239448670104',
    appId: '1:239448670104:web:5342657ae771ac2113b5ed'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
