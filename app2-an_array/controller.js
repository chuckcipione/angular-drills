angular.module('arrayApp').controller('arrayController', function($scope, myService){
    $scope.myData = myService.myData;
    
})