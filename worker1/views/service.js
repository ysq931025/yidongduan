angular.module("service",[])
.factory("indexDate",function($http){
    return $http({url:"data.txt"})
})