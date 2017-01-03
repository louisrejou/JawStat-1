'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }, {
    title: 'Form',
    state: 'forms'
  }, {
    title: 'About',
    state: 'about'
  }, {
    title: 'Contact',
    state: 'contact'
  }];
  isCollapsed = true;
  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;

  constructor(Auth) {
   'ngInject';
   this.isLoggedIn = Auth.isLoggedInSync;
   this.isAdmin = Auth.isAdminSync;
   this.getCurrentUser = Auth.getCurrentUserSync;
 }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
