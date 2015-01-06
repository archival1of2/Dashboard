/**
 * Widget Thumbnail Directive
 */

angular
    .module('RDash')
    .directive('rdWidgetThumbnail', rdWidgetThumbnail);

function rdWidgetThumbnail() {
    var directive = {
        requires: '^rdWidgetBody',
        scope: {
            color: '@',
            icon: '@',
            title: '@',
            comment: '@'
        },
        transclude: false,
        template: '<div class="widget-icon pull-left" ng-class="color"><i class="fa" ng-class="icon"></i></div><div class="title">{{title}}</div><div class="comment">{{comment}}</div>',
        restrict: 'E'
    };
    return directive;
};