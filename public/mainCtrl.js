angular.module("stenotypeApp").controller("mainCtrl", function($scope,mainServ) {
$scope.tagline = 'Tagline is working...'; 
$scope.getStenotypes = function(){
    mainServ.getSteno()
    .then(function(response){
    $scope.data = response;
	console.log(response);
    })
};

  $(document).ready(function(){
	$('.carousel').carousel({
  interval: 3000
});
});


});
