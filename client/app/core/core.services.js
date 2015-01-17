(function() {
    'use strict';

    angular.module('gp.core')
        .factory('RaceService', RaceService);

    function RaceService($resource) {
        
        var baseUrl = '../server/index.php/';

        var service = {
            getRace: getRace,
            getRaceList: getRaceList
        };

        return service;

        function getRace(raceId) {
            var resource = $resource(baseUrl + 'race/:raceId', {raceId:'@raceId'}, {});
            return resource.get({raceId:raceId});
        }
        function getRaceList() {
            var resource = $resource(baseUrl + 'races/:year', {year:'@year'}, 
                {query: {method:'GET', isArray:true}});
            return resource.query();
        }


    }


    /*
    .factory('RaceService', function($resource) {

        var resource = $resource('../server/index.php/race/:raceId', {raceId: '@raceId'},
        { query: {method:'GET', isArray:false}});

        resource.getRace = function(raceId) {
        return this.get({raceId: raceId});
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

    })*/
})();