'use strict';

angular.module('LoginApp', ['ngSanitize'])
	.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.today = Date.now();


		$scope.validatePW = function(){
			
			var pass1 = $scope.pass1;
			var pass2 = $scope.pass2;

			if (pass1 == pass2) {
				console.log("they match");
				$scope.signup.pass2.$setValidity("required", true);
			} else {
				console.log("they don't match");
				$scope.signup.pass2.$setValidity("required", false);
			}
			
		};

		

	}])