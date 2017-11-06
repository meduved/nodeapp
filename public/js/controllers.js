'use strict';


myApp.controller("partial3CTRL", function ($scope, $http) {

    $scope.excelData = [];
    $scope.mongoData = [];
    $scope.dTable = "";
    $scope.updates = 0;
    $scope.inserts = 0;
    $scope.synchros = 0;
    $scope.appState = "working"

    $scope.init = function () {
    const { Client } = require('pg');
    
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    
    client.connect();
    
    client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      client.end();
    });
}
 
//$scope.init()

});


// you may add more controllers below