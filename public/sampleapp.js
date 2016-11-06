angular.module('sampleapp', [])

.directive('list', function() {
   return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'list.html',
      link: function(scope) {
         scope.state = {selected: ''};
      }
   }
})

.directive('item', function() {
   return {
      scope: true,
      restrict: 'E',
      transclude: true,
      templateUrl: 'item.html',
      link: function(scope, element, attrs) {
         scope.id = attrs.id;

         if (attrs.default)
            scope.state.selected = scope.id;

         scope.select = function() {
            scope.state.selected = scope.id;
         }
      }
   }
});
