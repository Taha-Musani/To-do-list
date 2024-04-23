let app = angular.module("Container", []);

app.run(function ($rootScope) {
  $rootScope.tasks = JSON.parse(localStorage.getItem("tasks")) || [];// when the page will load it will give us a data which is stored in the keys array else it will create empty array
});

app.controller("todoController", function ($rootScope, $scope) {});
