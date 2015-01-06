angular.module('gp.query')

  .controller('RaceController', function($scope, $stateParams, $state, RaceService)  {
    $scope.raceId = $stateParams.raceId;
    // race details
    $scope.race = RaceService.getRace($stateParams.raceId);

  })
  .controller('RaceListController', function($scope, $state, RacesService)  {

    $scope.raceFilter = null;
    $scope.raceLimit = 25;

    // races list
    $scope.races = RacesService.query();

  });