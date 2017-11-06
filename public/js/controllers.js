'use strict';


myApp.controller("partial3CTRL", function ($scope, $http) {

    $scope.excelData = [];
    $scope.mongoData = [];
    $scope.dTable = "";
    $scope.updates = 0;
    $scope.inserts = 0;
    $scope.synchros = 0;
    $scope.appState = "working"

    $scope.reLoad = function () {
    }


});


// you may add more controllers below