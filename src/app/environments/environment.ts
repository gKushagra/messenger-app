// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  singleSignOn: "http://localhost:8080/auth",
  authenticationUrl: "https://messengerapi.softwright.in/auth/",
  usersUrl: "https://messengerapi.softwright.in/users",
  contactsUrl: "https://messengerapi.softwright.in/contacts",
  requestUrl: "https://messengerapi.softwright.in/requests",
  postsUrl: "https://messengerapi.softwright.in/posts",
  filesUrl: "https://messengerapi.softwright.in/files",
  conversationsUrl: "https://messengerapi.softwright.in/conversations",
  linksUrl: "https://messengerapi.softwright.in/links",
  callUrl: "https://messengerapi.softwright.in/calls",
  socketUrl: 'wss://messengersocket.softwright.in',
  reconnectInterval: 2000
  // authenticationUrl: "http://localhost:5050/auth/",
  // usersUrl: "http://localhost:5050/users",
  // contactsUrl: "http://localhost:5050/contacts",
  // requestUrl: "http://localhost:5050/requests",
  // postsUrl: "http://localhost:5050/posts",
  // filesUrl: "http://localhost:5050/files",
  // conversationsUrl: "http://localhost:5050/conversations",
  // linksUrl: "http://localhost:5050/links",
  // callUrl: "http://localhost:5050/calls",
  // socketUrl: 'ws://localhost:5051',
  // reconnectInterval: 2000
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
