// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  agmCore: {

    // apiKey: 'AIzaSyAbMQVrrw-nOg9CT14XHF-YPiLgJQS6WpM',
    // apiKey: 'ABQIAAAAvZMU4-DFRYtw1UlTj_zc6hT2yXp_ZAY8_ufC3CFXhHIE1NvwkxQcT1h-VA8wQL5JBdsM5JWeJpukvw',

    apiKey: 'AIzaSyBQ7Q5TPBb8JNqzJ5Uglsl93iJnwIBLvoo',
    // apiKey: 'AIzaSyCM0yokE6xoF4Od0iVltZjDe_YZW9Y_8Bs',
    libraries: ['places']
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
