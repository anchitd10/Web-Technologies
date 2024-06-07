var app = angular.module("filterApp", []);

app.controller("FilterController", function($scope) {
    $scope.items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple", "Mango", "Blueberry"];
    $scope.searchQuery = "";
});
