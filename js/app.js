'use strict';

angular.module('LoginApp', ['ngSanitize'])
	.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

		$scope.submitted = false;
		
		$scope.validatePW = function(){	
			var pass1 = $scope.pass1;
			var pass2 = $scope.pass2;
			if (pass1 == pass2) {
				$scope.signup.pass2.$setValidity("required", true);
			} else {
				$scope.signup.pass2.$setValidity("required", false);
			}
		};

		$scope.submit = function(){
			console.log("test");
			var htmlText = '<div class="alert alert-success"><strong>Success!</strong></div>';
			document.getElementById('successAlert').innerHTML = htmlText;

		}
		$scope.removeSuccess = function(){
			document.getElementById('successAlert').innerHTML = "";
		}


		$scope.validateBD = function(){
			var today = new Date();
			var birthdate = Date.parse($scope.birthdateBox);
			if (/^\d+$/.test(birthdate)) {
				birthdate = new Date(birthdate);
				var age = today.getFullYear() - birthdate.getFullYear();
				var m = today.getMonth() - birthdate.getMonth();
				if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())){
					age--;
				}
				if (age >= 13 && age) {
					$scope.signup.birthdateBox.$setValidity("required", true);
				} else {
					$scope.signup.birthdateBox.$setValidity("required", false);
				}

			} else {
				$scope.signup.birthdateBox.$setValidity("required", false);
			}
		};

	}])