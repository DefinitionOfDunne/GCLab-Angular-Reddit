var app = angular.module("redditApp");

app.service('redditDataService', function($http) {
    this.getRedditData = function() {
        var url = "https://www.reddit.com/r/aww/.json";

        var promise = $http.get(url);

        return promise;
    }
});

