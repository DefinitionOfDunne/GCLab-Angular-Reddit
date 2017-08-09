var app = angular.module("redditApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/cute",{
        templateUrl:"views/main.html",
        controller: "mainController"
    });

});
