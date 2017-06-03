(function() {
  'use strict';

  angular
    .module('financeWebapp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($auth,toastr) {
    var vm = this;

    vm.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

    vm.login = function()
    {
      toastr.info('Sample login request should be sent to the server now...');
    }
  }
})();
