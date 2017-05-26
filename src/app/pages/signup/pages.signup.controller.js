(function() {
  'use strict';

  angular
    .module('financeWebapp')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController(toastr) {
    var vm = this;


    vm.showToastr = showToastr;

    // activate();

    // function activate() {
    //   $timeout(function() {
    //     // vm.classAnimation = 'rubberBand';
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }

    function showToastr() {
      toastr.info('There should be a AJAX call to backend API or at least POST request...');
      vm.classAnimation = '';
    }
  }
})();
