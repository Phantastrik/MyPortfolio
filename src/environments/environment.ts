// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  configFirebase : {
      apiKey: 'AIzaSyDaNSjetG315mXS8j5SZJk4WE2ZOF4ugKU',
      authDomain: 'mon-portfolio-dev.firebaseapp.com',
      databaseURL: 'https://mon-portfolio-dev.firebaseio.com',
      projectId: 'mon-portfolio-dev',
      storageBucket: '',
      messagingSenderId: '812174035336',
      appId: '1:812174035336:web:e57380343a25ea7e'
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
