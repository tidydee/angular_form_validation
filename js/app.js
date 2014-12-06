// Application module that injects routing, controller, and directive dependencies.
var myApp = angular.module('myApp', ['ngRoute', 'myControllers', 'myDirectives'])
                     .config(function ($routeProvider) {
                         $routeProvider.when("/home", {
                             // templateUrl: 'views/list.html',
                             // controller: 'ListCtrl'
                         }
                    )
             // If no route is selected then use the 'home' route.
             .otherwise({ redirectTo: '/home' });
                     });

// Directive - Modifies HTML behaviour.
var myDirectives = (function () {
    var myDirectives = angular.module('myDirectives', []);

    // directive() is a factory method to create directives.
    myDirectives.directive('myStars', function () {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                rating: '=',
                max: '='
            },
            link: function ($scope, elem, attrs, ctrl) {
                var updateStars = function () {
                    $scope.stars = [];
                    for (var i = 0; i < $scope.max; i++) {
                        if (i < $scope.rating)
                            $scope.stars.push({ filled: true });
                        else
                            $scope.stars.push({ filled: false });
                    }
                };
                // Here our watcher is bound to 'rating'.
                $scope.$watch('rating', function () {
                    updateStars();
                });
                $scope.toggle = function (index) {
                    $scope.rating = index + 1;
                };

            },
            templateUrl: function (element, attr) { return 'views/myStars.html' },
        }
    });
    myDirectives.directive('myAlert', function () {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                //
            },
            link: function ($scope, elem, attrs, ctrl) {
                $scope.alert = function (input) {
                    alert( input );
                };
            },
            templateUrl: function (element, attr) { return 'views/myAlert.html' },
        }
    });
    myDirectives.directive('signUpForm', function () {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                //
            },
            link: function ($scope, elem, attrs, ctrl) {
                $scope.alert = function (input) {
                    alert( 'match' );
                };

                $scope.authenticate = function(value1, value2){
                    return (!value1 && !value2) || !(value1 === value2);
                };
            },
            templateUrl: function (element, attr) { return 'views/signUpForm.html' },
        }
    });


    return myDirectives;
}());

// Controller - dispatches inputs and outputs.
var myControllers = (function () {
    var myControllers = angular.module('myControllers', []);

    // Controllers are defined by the controller function.
    myControllers.controller('AppCtrl', ['$scope', function ($scope) {
        $scope.title = "AngularJS Tutorial";
    }]);
    return myControllers;
}());
