(function() {
  'use strict';

  angular
    .module('xpresso.addJoinMeeting')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('addJoinMeeting', {
      url: '/addJoinMeeting',
      views: {
        "main": {
          controller: 'addjoinController as vm',
          templateUrl: 'app/addJoinMeeting/templates/addJoinMeeting.tpl.html'
        }
      }
    });
  }
})();
