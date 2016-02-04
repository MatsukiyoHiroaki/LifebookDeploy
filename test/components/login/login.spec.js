(function() {
  'use strict';

  describe('Controller: LoginController', function() {

    beforeEach(module('Lifebooks.components.login'));

    var LoginController;

    beforeEach(inject(function($controller) {
      LoginController = $controller('LoginController');
    }));

    describe('LoginController', function() {
      it('Test Case', function() {
        LoginController.activate();
      });
    });
  });
})();
