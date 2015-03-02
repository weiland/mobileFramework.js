/**
 * @name james or tobi
 * @module james
 *
 * @description
 * # james - tobit helper library
 * Helper library supporting the Chayns API
 */

// TODO: move all to helper.js or tobi/jams
// TODO: helper.js with ES6 and jasmine (and or tape)
// include helper as main module

// important is* functions
export * from './utils/is';

// extend object function
export * from './utils/extend';

// modernizer
//export * from './utils/modernizer';

// promise Q
//export * from './utils/promise';

// polyfill & ajax wrapper window.fetch (instead of $.ajax, $.get, $.getJSON, $http)
// offers fetch, fetchJSON (json is standard), uploads {get, post, put, delete}, fetchCSS, fetchJS
//export * from './utils/fetch';

// Browser APIs (window, document, location)
// TODO: consider to not bind browser to the utils `Object`
/* jshint -W116 */
/* jshint -W033 */
// jscs:disable parseError
import * as browser from './utils/browser'; //noinspection BadExpressionStatementJS jshint ignore: line
// jscs:enable parseError
/* jshint +W033 */
/* jshint +W116 */
export {browser};

// DOM
export * from './utils/dom';

// Logger
export * from './utils/logger';

// Analytics
//export * from './utils/analytics';

// front-end Error Handler (catches errors, identify and analyses them)
export * from './utils/error';

// auth & JWT handler
//export * from './utils/jwt';

// cookie handler (will be used in the local_storage as fallback)
//export * from './utils/cookie_handler';

// localStorage helper (which cookie fallback)
//export * from './utils/local_storage';

// micro event library
export * from './utils/events';

// offline cache helper
//export * from './utils/offline_cache';

// notifications: toasts, alerts, modal popups, native push
//export * from './utils/notifications';

// iframe communication and helper (CORS)
//export * from './utils/iframe';

// page visibility API
//export * from './utils/page_visibility';

// DateTime helper (converts dates, C# date, timestamps, i18n, time ago)
//export * from './utils/datetime';


// language API i18n
//export * from './utils/language';

// critical css

// loadCSS

// lazy loading
//export * from './utils/lazy_loading';


// in Future
// immutable
// weak maps
// observer
// web sockets (ws, SignalR)
// worker (shared worker, later service worker as well)
// location, pushState, history handler
// chayns site and code analyser: find deprecated methods, bad code, issues and bottlenecks
