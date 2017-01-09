(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });



  function MainCtrl($log) {
    $log.debug('MainCtrl loaded!');
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'ngMap',
      'ui.bootstrap',
      'router',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.directives.version',
      'common.filters.uppercase',
      'common.interceptors.http',
      'templates'
    ])
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
