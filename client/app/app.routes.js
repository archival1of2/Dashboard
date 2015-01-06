/**
 * Application Routes
 *
 * Configure ui-router states
 *
 * @see http://angular-ui.github.io/ui-router/site/#/api/ui.router
 */

angular
    .module('gp')
    .config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider)  {
  
  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'assets/templates/dashboard.html'
    })
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
      

}