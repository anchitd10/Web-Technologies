var app = angular.module("costCalculatorApp", []);

app.controller("CostCalculatorController", function($scope) {
    $scope.items = [];

    $scope.item = { name: "", quantity: 1, price: 0 };

    $scope.addItem = function() {
        $scope.items.push({
            name: $scope.item.name,
            quantity: $scope.item.quantity,
            price: $scope.item.price,
        });

        $scope.item.name = "";
        $scope.item.quantity = 1;
        $scope.item.price = 0;
    };

    $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);
    };

    $scope.getTotalCost = function() {
        let total = 0;
        $scope.items.forEach(function(item) {
            total += item.quantity * item.price;
        });
        return total;
    };
});
