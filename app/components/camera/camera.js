/**
 * camera Components module.
 *
 * @module Lifebooks.components.camera
 */
(function () {
  'use strict';

  var app = angular.module('Lifebooks.components.camera', ['firebase']);
  app.controller('CameraController', CameraController);
  app.directive('fileModel', CameraDirective);
  CameraController.$inject = ['$firebaseArray'];
  CameraDirective.$inject = ['$parse'];

  /**
   * CameraController
   *
   * @class CameraController
   * @constructor
   */
  function CameraController() {
    console.log('CameraController Constructor');
  }

  function CameraDirective($parse, $scope) {
    console.log('CameraDirective Constructor');
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        element.bind('change', function () {
          scope.$apply(function () {
            model.assign(scope, element[0].files[0]);
          });
        });
      }
    };
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  CameraController.prototype.activate = function($firebaseArray, $scope) {
    console.log('CameraController activate Method');
    vm = this;

    /*firebaseのインスタンス生成*/
    var ref = new window.Firebase('https://fiery-torch-4495.firebaseio.com/');
    $scope.messages = $firebaseArray(ref);

    /*fileAPIの写真データ取得*/
    $scope.$watch('imageFile', function(imageFile) {
      $scope.imageFileSrc = undefined;
      /*データがない場合*/
      if (!imageFile || !imageFile.type.match('image.*')) {
        return;
      }
      /*写真情報格納*/
      var imagedata = imageFile;
      /*ファイルオブジェクト生成*/
      var reader = new FileReader();
      reader.onload = function() {
        $scope.$apply(function() {
          /*写真を表示*/
          $scope.imageFileSrc = reader.result;
        });
      };
      reader.readAsDataURL(imageFile);
      /*firebaseに写真登録*/
      $scope.onclick = function() {
        console.log(imagedata);
        $scope.messages.$add({
          'img': reader.result, /*写真*/
          'coment': $scope.teikei.name,
          'code': $scope.teikei.code
        });
      };
    });
    /*イベント定義*/
    $scope.events = [
      {name: '出産' , code: 1},
      {name: 'お宮参り' , code: 2},
      {name: '一カ月検診' , code: 3}
    ];
    $scope.teikei = $scope.events[0];
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
