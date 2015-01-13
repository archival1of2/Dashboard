/**
 * Application Routes
 *
 * Configures ui-router states
 *
 * @see http://angular-ui.github.io/ui-router/site/#/api/ui.router
 */

(function() {
    'use strict';
    
    angular
        .module('gp')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider)  {
      
      /*
       *  Invalid/Undefined Redirects
       */
      $urlRouterProvider
        .otherwise('/');

      $stateProvider
        /*
         *  Index Redirect
         */
        .state('index', {
          url: '/',
          views: {
            'main': { templateUrl: 'assets/templates/dashboard.html' },
            'form': { templateUrl: 'app/query/race-list.template.html', controller: 'RaceListController' },
            'data': { templateUrl: 'app/query/race-detail.template.html', controller: 'RaceController' }
          }
        })
        .state('race', {
          url: '/race/:raceId',
          views: {
            'main': { templateUrl: 'assets/templates/dashboard.html' },
            'form': { templateUrl: 'app/query/race-list.template.html', controller: 'RaceListController' },
            'data': { templateUrl: 'app/query/race-detail.template.html', controller: 'RaceController' }
          }
        })


        /*
        .state('tables', {
          url: '/tables',
          templateUrl: 'app/query/race.template.html'
        })
        .state('info', {
          url: '/info',
          templateUrl: 'assets/templates/info.html'
        })
        .state('compare', {
          url: '/compare',
          templateUrl: 'assets/templates/compare.html'
        })
        // Route - Race Details
        .state("race", {
          url: "/race/:raceId",
          templateUrl: "app/query/race.template.html",
          controller: "RaceController"
        })
        */
    }
})();