

var app = angular.module('TopicTracker', ['ngRoute', 'ngResource', 'zingchart-angularjs']);

   app.controller("VisualsController", function($scope) {

      $scope.myJson = {
         type : "bar",
         title:{
           backgroundColor : "transparent",
           fontColor :"black",
           text : "Hello world"
         },
         backgroundColor : "white",
         series : [
           {
             values : [1,2,3,4],
             backgroundColor : "#4DC0CF"
           }
         ]
       };

     $scope.addValues = function(){
       var val = Math.floor((Math.random() * 10));
       console.log(val);
       $scope.myJson.series[0].values.push(val);
     }

   });
