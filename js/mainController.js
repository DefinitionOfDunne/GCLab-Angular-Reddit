var app = angular.module("redditApp");

app.controller("mainController", function($scope, redditDataService) {

    $scope.cute = [];

    var promise = redditDataService.getRedditData();
    	promise.then(function(response) {
        $scope.cute = response.data.data.children;
        console.log($scope.cute);
    });

});