(function() {
    'use strict';

    /**
     * @name  RedigeCtrl
     * @description Controller
     */
    function RedigeCtrl($scope, $state) {
        // Formulaire
        $scope.master = {};

        $scope.update = function (user) {
            $scope.master = angular.copy(user);
            $state.go('root.home')
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
        // End Formulaire

        $scope.goHome = function () {
            $state.go('root.home');
        };
    }
    angular.module('redigefc', [])
        .controller('RedigeCtrl', RedigeCtrl);

})()
