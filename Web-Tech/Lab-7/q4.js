var app = angular.module("tableApp", []);

app.controller("TableController", function($scope) {
    $scope.employees = [
        { name: "John Doe", age: 28, department: "Sales" },
        { name: "Jane Smith", age: 34, department: "Engineering" },
        { name: "Samuel Johnson", age: 45, department: "HR" },
        { name: "Anna Brown", age: 23, department: "Marketing" },
        { name: "Mark White", age: 38, department: "Finance" },
    ];

    $scope.sortField = "name";
});
