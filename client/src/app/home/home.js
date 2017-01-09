(function() {
  'use strict';

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HomeCtrl() {

  }

  function PopupCtrl($scope, $modal) {
      $scope.goRedige = function () {
          console.log('opening pop up');
          var modalInstance = $modal.open({
              templateUrl: '../redigefc/redigefc.tpl.html',
              controller: 'ContCtrl'
          });
      };
  }
  
  function ContCtrl($scope, $modalInstance) {
      $scope.closePopup = function () {
          $modalInstance.dismiss('cancel');
      };
  }

  angular.module('home', ['ui.bootstrap'])
    .controller('HomeCtrl', HomeCtrl)
    .controller('PopupCtrl', PopupCtrl)
      .controller('ContCtrl', ContCtrl)
})()
