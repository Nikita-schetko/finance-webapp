(function() {
  'use strict';

  angular
    .module('financeWebapp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1495636500727;
    vm.showToastr = showToastr;

    // activate();

    // function activate() {
    //   $timeout(function() {
    //     // vm.classAnimation = 'rubberBand';
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }

    function showToastr() {
      toastr.info('Sample notification');
      vm.classAnimation = '';
    }


  }
})();
