angular.module('gp.core')

  .factory('RaceService', function($resource) {

    var resource = $resource('../server/index.php/race/:raceId', {raceId: '@raceId'},
    { query: {method:'GET', isArray:false}});

    resource.getRace = function(raceId) {
      return this.query({raceId: raceId});
    }

    return resource;

  })

  .factory('RacesService', function($resource) {

    var resource = $resource('../server/index.php/races/:year', {year: '@year'},
    { query: {method: 'GET', isArray:true}});

    // list all races; allow front-end to filter
    resource.listRaces = function() {
      return this.query();
    }

    return resource;

  });