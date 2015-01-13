(function() {
    'use strict';
  
    angular
        .module('gp.layout')
        .controller('ToolbarController', ToolbarController);

    ToolbarController.$inject = ['$scope', '$cookieStore'];

    function ToolbarController($scope, $cookieStore) {
        $scope.toggle = false;

        /**
         * Search Box
         *
         * On click, replaces the "Dashboard" filler text with a search box as the
         * breadcrumbs text below drops away.
         */
        function toggleSearch() {
            $scope.toggle = !$scope.toggle;
            $cookieStore.put('toggle', $scope.toggle);
        }

    /**
     * Collapse Dropdowns
     */

    /**
     * Breadcrumb Control
     */

    /**
     * Waterfall Toggle
     */
    }

})();