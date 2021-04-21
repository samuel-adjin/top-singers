let app = angular.module("singersApp", []);
app.controller("SingerController",function($scope){
    $scope.singers = [
        {"pic":"images/1.jpg", "name":"beyonce","gender":"female", "quality":"images/like.jpg"},
        {"pic":"images/2.jpg", "name":"lady gaga","gender":"female", "quality":"images/dislike.jpg"},
        {"pic":"images/3.jpg", "name":"taylor swift","gender":"female", "quality":"images/dislike.jpg"},
        {"pic":"images/4.png", "name":"bruno mars","gender":"male", "quality":"images/like.jpg"},
        {"pic":"images/5.jpg", "name":"ariana grande","gender":"female", "quality":"images/like.jpg"},
        {"pic":"images/6.jpg", "name":"katy perry","gender":"female", "quality":"images/like.jpg"},
        {"pic":"images/7.jpg", "name":"justin bieber","gender":"male", "quality":"images/dislike.jpg"},
        {"pic":"images/8.jpg", "name":"selena gomez","gender":"female", "quality":"images/like.jpg"},
    ];
   
});