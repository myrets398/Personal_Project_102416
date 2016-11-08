angular.module("stenotypeApp").service("mainServ", function($http) {


this.getSteno = function(){
  return $http({
    method: "GET",
    url: "/stenotype"
  }).then(function(res){
    console.log(res);
    return res.data;
  });


};

});
