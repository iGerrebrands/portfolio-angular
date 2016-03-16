angular
  .module('portoApp')
  .directive('about', [function (
  ) {
    return {
      restrict: 'E',
      templateUrl: './scripts/about/aboutView.html',
      link: function (scope) {

      }
    }
  }]);
