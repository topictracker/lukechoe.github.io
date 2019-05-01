var app = angular.module('TopicTracker', ['zingchart-angularjs', 'ngTable']);

app.controller('VisualsController', function($scope, NgTableParams) {

  $scope.politicians = [
      {name: "BERNIE SANDERS", Data: [2,1,3,5], Labels: ["Topic1", "Topic2", "Topic3", "Topic4", "Topic5"], Toggle: false, Index: 0},
      {name: "Joe Biden?", Labels: ["Topic10", "Topic20", "Topic30", "Topic40", "Topic50"], Data: [2,3,5,2], Toggle: false, Index: 1},
      {name: "Trump", Labels: ["Topic11", "Topic21", "Topic31", "Topic41", "Topic51"], Data: [6,3,3,1], Toggle: false, Index: 2},
      {name: "Kamala Harris", Labels: ["Topic12", "Topic22", "Topic32", "Topic42", "Topic52"], Data: [2,2,3,1], Toggle: false, Index: 3},
      {name: "Elizabeth Warren", Labels: ["Topic1", "Topic2", "Topic3", "Topic4", "Topic5"], Data: [6,5,3,7], Toggle: false, Index: 4},
      {name: "Andrew Yang", Labels: ["Topic1", "Topic2", "Topic3", "Topic4", "Topic5"],Data: [6,2,6,2], Toggle: false, Index: 5}
  ];
  $scope.politicalCandidates = new NgTableParams({page: 1, count: 5}, {
      /*
      total: $scope.politicians.length,
      getData: function ($defer, params) {
          $scope.data = $scope.politicians.slice((params.page() - 1) * params.count(), params.page() * params.count());
          $defer.resolve($scope.data);
      }*/
      dataset: $scope.politicians
  });

  $scope.myJson = {
      type : "bar",
      title:{
        backgroundColor : "transparent",
        fontColor :"black",
        text : "Trending Topics"
      },
      plot:{
        animation:{
            effect: 11,
            method: 3,
            sequence:"ANIMATION_BY_PLOT_AND_NODE",
            speed:10
        }
      },
      backgroundColor : "white",
      scaleX: {
          label:{ /* Scale Title */
            text:"Trending Topics",
          },
          labels:["Filler1","Filler2","Filler3","Filler4"]
      },
      series : [
        {
          values : [0,0,0,0],
          backgroundColor : "#4DC0CF"
        }
      ]
    };

  $scope.currentCandidate = "empty";

  $scope.toggleData = function(p){
    if (p.Toggle == false){
        p.Toggle = true;
        $scope.currentCandidate = p.name;
        $scope.myJson.series[0].values = p.Data;
        //console.log($scope.myJson.series[0])
    }
    else if (p.Toggle == true && p.name != $scope.currentCandidate){
        console.log("YYYY");
        $scope.currentCandidate = p.name;
        $scope.myJson.series[0].values = p.Data;
    }
    else{
        p.Toggle = false;
        $scope.myJson.series[0].values = [0,0,0,0];
        $scope.currentCandidate = "empty";
    }
  }

  $scope.changeColor = function(row) {
      console.log("ok")
    $scope.colorProperty = {'background-color': 'red'};
      /*
    if(bool == true) {
        $scope.colorProperty = {color: 'red'};
    } else if (bool === false) {
        $scope.colorProperty= {color: 'white'}; //or, whatever the original color is
    }*/
  };

  $scope.addValues = function(){
    var val = Math.floor((Math.random() * 10));
    console.log(val);
    $scope.myJson.series[0].values.push(val);
  }



});
