(function() {
  'use strict';

  describe('Controller: InitialsettingController', function() {

    beforeEach(module('Lifebooks.components.initialsetting'));

    var InitialsettingController;

    beforeEach(inject(function($controller) {
      InitialsettingController = $controller('InitialsettingController');
    }));

    describe('InitialsettingController', function() {
      it('Test Case', function() {
        InitialsettingController.activate();
      });
    });
  });
})();
