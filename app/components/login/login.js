/**
 * Login Components module.
 *
 * @module Lifebooks.components.login
 */
(function () {
  'use strict';

  angular
    .module('Lifebooks.components.login', [])
    .controller('LoginController', LoginController);

  LoginController.$inject = [];

  /**
   * LoginController
   *
   * @class LoginController
   * @constructor
   */
  function LoginController() {
    console.log('LoginController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  LoginController.prototype.activate = function() {
    console.log('LoginController activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
