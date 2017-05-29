(function() {
  'use strict';

  angular
    .module('financeWebapp')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController(toastr) {
    var vm = this;

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
      vm.classAnimation = ''; 
    }
  }
})();
