'use strict';

var myApp = angular.module('myApp', [])
.run(function($rootScope) {
    $rootScope.test = 'lala';
})


myApp.config(function ($routeProvider) {
	$routeProvider.when(
		'/partial3',
		{
			templateUrl: 'partials/partial3.html',
			controller: 'partial3CTRL'
		});
	/*$routeProvider.when(
		'/view2',
		{
			templateUrl: 'partials/partial2.html',
			controller: 'MyCtrl2'
		});
	$routeProvider.when(
		'/view3',
		{
			templateUrl: 'partials/home.html',
			controller: 'MyCtrlHome'
		});*/

	$routeProvider.otherwise(
		{
			redirectTo: '/partial3'
		});
});
