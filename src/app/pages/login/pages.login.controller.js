(function() {
  'use strict';

  angular
    .module('financeWebapp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($auth) {
    var vm = this;

    vm.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
  }
})();
