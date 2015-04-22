var angular = require('angular');

var TestController = require('./home/TestController.js');

var app = angular.module('app', []);
app.controller('TestController', TestController);


export {app};
