angular.module('risk.main', [])

.controller('RiskCtrl', function ($scope) {

  $scope.possibilities = {};

  $scope.risks = {};

  $scope.break = {};

  $scope.insights = [];

  $scope.assets = ["Bonds", "Stocks", "ETFs", "Commodities", "Cash"];


  $scope.showTable = function() {
    $scope.tabular = true;
  };

  $scope.showResults = function() {
    $scope.submissionComplete = true;
    $scope.drawInsights();
  };

  $scope.drawInsights = function() {
    var totalAmount = 0;
    for (var key in $scope.risks) {
      totalAmount += $scope.risks[key];
    }
    for (var key in $scope.risks) {
      $scope.break[key] = Math.round($scope.risks[key]/totalAmount * 100);
    }
  };
  
  $scope.riskEval = function() {
     $scope.eval = [];

    for (var i = 1; i <= 10; i++) {
      var possibility = {};
      $scope.populate(possibility, i);
      $scope.populate($scope.possibilities, i, true);
      $scope.eval.push(possibility);
    }
  }

//populate the risk and amount it to 100 to get the chart
  $scope.populate = function(object, risk, chart) {
    if (chart) {
      if (risk === 1) {
      object["1"] = [];
      object["1"].push(10);
      object["1"].push(0);
      object["1"].push(5);
      object["1"].push(0);
      object["1"].push(85);
      } else if (risk === 2) {
        object["2"] = [];
        object["2"].push(10);
        object["2"].push(10);
        object["2"].push(0);
        object["2"].push(0);
        object["2"].push(80);
      } else if (risk === 3) {
        object["3"] = [];
        object["3"].push(10);
        object["3"].push(10);
        object["3"].push(10);
        object["3"].push(0);
        object["3"].push(70);
      } else if (risk === 4) {
        object["4"] = [];
        object["4"].push(20);
        object["4"].push(10);
        object["4"].push(10);
        object["4"].push(0);
        object["4"].push(60);
      } else if (risk === 5) {
        object["5"] = [];
        object["5"].push(15);
        object["5"].push(15);
        object["5"].push(10);
        object["5"].push(10);
        object["5"].push(50);
      } else if (risk === 6) {
        object["6"] = [];
        object["6"].push(15);
        object["6"].push(15);
        object["6"].push(15);
        object["6"].push(20);
        object["6"].push(35);
      } else if (risk === 7) {
        object["7"] = [];
        object["7"].push(10);
        object["7"].push(20);
        object["7"].push(20);
        object["7"].push(20);
        object["7"].push(30);
      } else if (risk === 8) {
        object["8"] = [];
        object["8"].push(5);
        object["8"].push(30);
        object["8"].push(10);
        object["8"].push(30);
        object["8"].push(20);
      } else if (risk === 9) {
        object["9"] = [];
        object["9"].push(0);
        object["9"].push(40);
        object["9"].push(5);
        object["9"].push(35);
        object["9"].push(20);
      } else if (risk === 10) {
        object["10"] = [];
        object["10"].push(5);
        object["10"].push(40);
        object["10"].push(5);
        object["10"].push(40);
        object["10"].push(10);
      }
    } else {
      if (risk === 1) {
        object.bonds = 10;
        object.stocks = 0; 
        object.etfs = 0;
        object.commodities = 0;
        object.cash = 90;
      } else if (risk === 2) {
        object.bonds = 10;
        object.stocks = 10; 
        object.etfs = 0;
        object.commodities = 0;
        object.cash = 80;
      } else if (risk === 3) {
        object.bonds = 10;
        object.stocks = 10; 
        object.etfs = 10;
        object.commodities = 0;
        object.cash = 70;
      } else if (risk === 4) {
        object.bonds = 20;
        object.stocks = 10; 
        object.etfs = 10;
        object.commodities = 0;
        object.cash = 60;
      } else if (risk === 5) {
        object.bonds = 15;
        object.stocks = 15; 
        object.etfs = 10;
        object.commodities = 10;
        object.cash = 50;
      } else if (risk === 6) {
        object.bonds = 15;
        object.stocks = 15; 
        object.etfs = 15;
        object.commodities = 15;
        object.cash = 40;
      } else if (risk === 7) {
        object.bonds = 10;
        object.stocks = 20; 
        object.etfs = 20;
        object.commodities = 20;
        object.cash = 30;
      } else if (risk === 8) {
        object.bonds = 5;
        object.stocks = 30; 
        object.etfs = 10;
        object.commodities = 30;
        object.cash = 25;
      } else if (risk === 9) {
        object.bonds = 0;
        object.stocks = 40; 
        object.etfs = 5;
        object.commodities = 35;
        object.cash = 20;
      } else if (risk === 10) {
        object.bonds = 5;
        object.stocks = 40; 
        object.etfs = 5;
        object.commodities = 40;
        object.cash = 10;
      }
    }
    return object;
  }

  $scope.riskEval();

//set a default value for the chart
  $scope.data = $scope.possibilities[9];

  $scope.rating = 0;
  $scope.moveChart = function() {
    $scope.data = $scope.possibilities[$scope.rating];
    $scope.riskEntered = true;
  }
});