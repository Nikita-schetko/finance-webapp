(function() {
  'use strict';

  angular
    .module('financeWebapp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
        .when('/signup', {
          url: '/signup',
          templateUrl: 'app/pages/signup/pages.signup.html',
          controller: 'SignupController',
          controllerAs: 'signup'
        })
        .when('/login', {
          url: '/login',
          templateUrl: 'app/pages/login/pages.login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        })
        .when('/newsfeed', {
          url: '/newsfeed',
          templateUrl: 'app/pages/newsfeed/pages.newsfeed.html',
          controller: 'NewsfeedController',
          controllerAs: 'newsfeed'
        })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
