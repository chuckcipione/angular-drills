angular.module('app').controller('myController', function($scope,myService){
    $scope.myData = myService.myData;

    $scope.filterObj = {
        email: '.uk',
        phone: '1'
    }
})