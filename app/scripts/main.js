/**
 * This is Lifebooks module.
 *
 * @module Lifebooks
 */
(function () {
  'use strict';

  angular
    .module('Lifebooks', [
      'ngNewRouter',
      'Lifebooks.config',
      'Lifebooks.components.home',
      'Lifebooks.components.login',
      'Lifebooks.components.album',
      'Lifebooks.components.menu',
      'Lifebooks.components.about',
      'Lifebooks.components.camera',
      'Lifebooks.components.initialsetting',
      'Lifebooks.components.contact',
      'Lifebooks.components.calendar'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/login'},
    {path: '/login',  component: 'login'},
    {path: '/initialsetting',  component: 'initialsetting'},
    {path: '/menu',    component: 'menu'},
    {path: '/home',    component: 'home'},
    {path: '/album',   component: 'album'},
    {path: '/about',   component: 'about'},
    {path: '/camera',  component: 'camera'},
    {path: '/contact', component: 'contact'},
    {path: '/calendar', component: 'calendar'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main Lifebooks
   * @constructor
   */
  function AppController () {}
})();
