(function() {
  'use strict';

  angular
    .module('xpresso.idGeneration.controllers')
    .controller('IdController', IdController);

  IdController.$inject = ['$http','$localStorage'];

  function IdController($http,$localStorage) {

    var vm = this;
    vm.later = false;

    vm.meetingId=$localStorage.meetingID;
    vm.done = function() {
      $uibModalInstance.close();
    }
  }
})();
