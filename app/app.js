var app = angular.module('app', ['ngTouch', 'ui.router']);

app.config(($stateProvider, $urlRouterProvider) =>{
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			template: require('./home/home.html'),
			controller: require('./home/TestController.js')
		})
});

module.exports = app;
