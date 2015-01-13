(function() {
    'use strict';

    angular.module('gp.query')
        .controller('RaceController', RaceController)
        .controller('RaceListController', RaceListController);

    function RaceController($scope, $stateParams, $state, RaceService) {
        $scope.raceId = $stateParams.raceId;
        $scope.race = RaceService.getRace($stateParams.raceId);
    }

    function RaceListController($scope, RaceService) {
        $scope.filter = null;
        $scope.raceLimit = 25;
        $scope.races = RaceService.getRaceList();
    }
    
})();