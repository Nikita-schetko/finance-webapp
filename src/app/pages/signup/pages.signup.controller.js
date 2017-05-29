(function() {
  'use strict';

  angular
    .module('financeWebapp')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController(toastr, $timeout) {
    var vm = this;
    vm.message = 'Join Us';
    vm.newUserRequestSent = false;
    vm.showNewUserForm = true;
    vm.showNewUserInstructions = false;
    vm.CheckPassword = function(password, confirmPassword)
    {
        if(password == confirmPassword)
        {
            vm.passwordEquals = true;
            vm.passwordClass = "passwordMatch";
        }
        else
        {
            vm.passwordEquals = false;
            vm.passwordClass = "";
        }
    }

    vm.showToastr = function () {
      toastr.info('There should be a AJAX call to backend API or at least POST request...');
      vm.message = 'Thank you!';
      vm.newUserRequestSent = true;
      $timeout(function(){ vm.showNewUserForm = false }, 700); 
      $timeout(function(){ vm.showNewUserInstructions = true }, 1500); 
    }
  }
})();
