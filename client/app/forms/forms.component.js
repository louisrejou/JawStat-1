'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './forms.routes';

export class FormsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('jawStat.forms', [uiRouter])
  .config(routes)
  .component('forms', {
    template: require('./forms.html'),
    controller: FormsComponent,
    controllerAs: 'formsCtrl'
  })
  .name;
