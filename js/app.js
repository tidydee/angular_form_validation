// Declare module that references our controllers.
var myApp = angular.module('myApp', ['ngRoute', 'cardAppControllers'])
                   .config(function ($routeProvider) {
                       $routeProvider.when("/home", {
                           //templateUrl: 'views/main.html',
                           //controller: 'AppCtrl'
                       })
                           // '/home/number/:numberID/suit/:suitID'
                       .when("/aLink/num/:numID/str/:strID", {
                           templateUrl: 'views/aView.html',
                           controller: 'ACtrl'
                       })
                       // If no route is selected then use the 'home' route.
                       .otherwise({ redirectTo: '/home' });
                   });

var cardAppControllers = (function () {
    var cardAppControllers = angular.module('cardAppControllers', []);

    // Declare the application controller and inject the scope reference.
    cardAppControllers.controller('AppCtrl', ['$scope', function ($scope) {
        // Define the title model.
        $scope.title = "AngularJS Tutorial";
        $scope.StartNum = 10;
        $scope.StartString = "Hello!";
    }]);
    // Declare controller that populates 'list.html' with data and inject the scope.
    cardAppControllers.controller('ACtrl', ['$scope', '$routeParams',
                                             function ($scope, $routeParams) {
                                                 // Define the cards model.
                                                 $scope.subtitleA = "Detail A";
                                                 $scope.myNum = $routeParams.numID;
                                                 $scope.myString = $routeParams.strID;
                                             }]);
    return cardAppControllers;
}());
