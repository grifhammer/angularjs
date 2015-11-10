angular.module('myApp', []).controller('myController', function($scope){

	$scope.students = [
		{
			name: 'Freddy',
			desc: 'Made a cool football game'
		},
		{
			name: 'Chance',
			desc: 'Bootstrap Guy'
		},
		{
			name: 'Will',
			desc: 'The wig guy'
		},
		{
			name: 'Stephen',
			desc: 'Awesome Theme!'
		},
		{
			name: 'Griffin',
			desc: 'DOTA2 addict'
		},
		{
			name: 'Oliver',
			desc: 'Eats 8 times a day'
		}
	]
	

	$scope.addPerson = function(){
		var newPerson = {
			name: $scope.newName,
			desc: $scope.newDesc
		}
		$scope.students.push(newPerson)
		$scope.newName = '';
		$scope.newDesc = '';
	}
});