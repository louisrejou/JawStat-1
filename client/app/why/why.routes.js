'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('why', {
      url: '/why',
      template: '<why></why>'
    });
}
