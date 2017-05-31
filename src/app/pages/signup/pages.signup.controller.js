(function() {
  'use strict';

  angular
    .module('financeWebapp')
    .controller('SignupController', SignupController);
  /** @ngInject */
  function SignupController(toastr, $timeout, $http, $log) {
    var vm = this;
    vm.message = 'Join Us';
    vm.newUser = {};
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
      vm.message = 'Thank you!';
      vm.newUserRequestSent = true;
        $http({
        method: 'POST',
        url: 'https://www.itoushi.jp/api_signup.php',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: function(obj) {
            var str = [];
            for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
        },
        data: {
          "userfullName" : vm.newUser.fullName,
          "userName": vm.newUser.userName,
          "userEmail": vm.newUser.email,
          "userPassword": vm.newUser.password
        }
      }).then(function successCallback(response) {
          toastr.info('Your request was succefully sent!');
          $timeout(function(){ vm.showNewUserForm = false }, 700); 
          $timeout(function(){ vm.showNewUserInstructions = true }, 1500);
          $log.info(response)
        }, function errorCallback(response) {
          $log.info(response)          
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        }); 
    }
  }
})();
