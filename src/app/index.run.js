(function() {
  'use strict';

  angular
    .module('financeWebapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
