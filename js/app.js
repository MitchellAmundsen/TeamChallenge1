'use strict';

angular.module('LoginApp', ['ngSanitize', 'ui.bootstrap'])
	.controller('HomeCtrl', ['$scope', '$http', '$sce', '$uibModal', function($scope, $http, $sce, $uibModal) {

		$scope.htmlText = "";
		
		// checks to make sure passwords are the same
		$scope.validatePW = function(){	
			var pass1 = $scope.pass1;
			var pass2 = $scope.pass2;
			if (pass1 == pass2) {
				$scope.signup.pass2.$setValidity("required", true);
			} else {
				$scope.signup.pass2.$setValidity("required", false);
			}
		};

		// attempt at making submit bring up alert tags
		$scope.submit = function(){
			var htmlText = '<div class="alert alert-success"><strong>Success!</strong></div>';
			
			$scope.text1 = $sce.trustAsHtml(htmlText);
			    var modalInstance = $uibModal.open({
			      animation: $scope.animationsEnabled,
			      templateUrl: 'partials/successmodal.html',
			      size: 'lg'
			    })
			};
		

		$scope.removeSuccess = function(){
			$scope.htmlText = "";
		}


		// checks for correct birthday (age of 13)
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