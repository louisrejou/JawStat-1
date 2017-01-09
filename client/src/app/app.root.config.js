
(function() {
  'use strict';

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterCtrl'
          }
        }
      })
      .state('root.home', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/home/home.tpl.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('root.about-us', {
        url: '/about-us',
        views: {
          '@': {
            templateUrl: 'src/app/about-us/about-us.tpl.html',
            controller: 'AboutUsCtrl'
          }
        }
      })
      .state('root.why', {
        url: '/why',
        views: {
          '@': {
            templateUrl: 'src/app/why/why.tpl.html',
            controller: 'WhyCtrl'
          }
        }
      })
      .state('root.contact', {
        url: '/contact',
        views: {
          '@': {
            templateUrl: 'src/app/contact/contact.tpl.html',
            controller: 'ContactCtrl'
          }
        }
      })
        .state('redigefc', {
          url: '/redigefc',
          views: {
            '@': {
              templateUrl: 'src/app/redigefc/redigefc.tpl.html',
              controller: 'RedigeCtrl'
            }
          }
        })
  }

  angular.module('router', [
    'ui.router',
    'home',
    'about-us',
    'contact',
    'why',
    'redigefc',
    'common.header',
    'common.footer',
    'common.services.data',
    'common.directives.version',
    'common.filters.uppercase',
    'common.interceptors.http',
    'templates'
  ])
    .config(config);
})();
