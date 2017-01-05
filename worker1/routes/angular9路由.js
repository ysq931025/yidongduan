angular.module("myapp",["ngRoute","ctrls","service"])
.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"../views/index.html",controller:"index"

    }).when("/list/:id",{
        templateUrl:"../views/list.html",controller:"list"
    }).when("/show",{
        templateUrl:"../views/show.html"
    }).otherwise("/")
})