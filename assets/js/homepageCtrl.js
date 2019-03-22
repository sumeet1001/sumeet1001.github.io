var app = angular.module('aboutme', []);

app.controller('homepage', ['$scope','$http', function ($scope, $http) {
	window.scope = $scope;
	var config = {
		apiKey: "AIzaSyDKYaLhJXtbYCbC4aY2pOwDJxWEK27BbP8",
		authDomain: "blog-project-sumeet.firebaseapp.com",
		databaseURL: "https://blog-project-sumeet.firebaseio.com",
		projectId: "blog-project-sumeet",
		storageBucket: "blog-project-sumeet.appspot.com",
		messagingSenderId: "520857739269"
	};
	firebase.initializeApp(config);
	// const data = firebase.database().ref('/sumeet');

	// let info;
	// data.on('value', function(snapshot){
	// 	$scope.info = snapshot.val();
	// 	return $scope.info;
	// })
	firebase.database().ref('/sumeet').once('value').then(function(snapshot) {
		$scope.$apply(() => {
			scope.info = (snapshot.val()) || 'Anonymous';
			scope.show = true;
		});
	});

}])