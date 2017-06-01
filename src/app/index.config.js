(function () {
  'use strict';

  angular
    .module('financeWebapp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $authProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = false;

    //options for satelizer

    $authProvider.facebook({
      clientId: 'Facebook App ID'
    });

    $authProvider.google({
      clientId: 'Google Client ID'
    });

    $authProvider.twitter({
      clientId: 'Twitter Client ID'
    });

    $authProvider.linkedin({
      clientId: 'LinkedIn Client ID'
    });
  }

})();
