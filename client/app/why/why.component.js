'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './why.routes';

export class WhyComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('jawStat.why', [uiRouter])
  .config(routes)
  .component('why', {
    template: require('./why.html'),
    controller: WhyComponent,
    controllerAs: 'whyCtrl'
  })
  .name;
