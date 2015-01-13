(function() {
'use strict';

    angular.module('gp.core', [

        /* AngularJS Modules */
        'ngResource', 'ngCookies',

        /* Cross-App Modules */
          // exception handler
          // logging
          // diagnostics
          // security
          // local data stashing
          // other common services...
        //'gp.filters',

        /* Third-Party Modules */
        'RDash', 
        'nvd3', 
        'ui.bootstrap', 
        'ui.router'
    ])
    
})();