var app = angular.module('aboutme', []);

app.controller('homepage', ['$scope','$window','$anchorScroll', '$location', function ($scope, $window,$anchorScroll,
$location) {
	window.scope = $scope;
	scope.projectDiv = false;
	var config = {
		apiKey: "AIzaSyDKYaLhJXtbYCbC4aY2pOwDJxWEK27BbP8",
		authDomain: "blog-project-sumeet.firebaseapp.com",
		databaseURL: "https://blog-project-sumeet.firebaseio.com",
		projectId: "blog-project-sumeet",
		storageBucket: "blog-project-sumeet.appspot.com",
		messagingSenderId: "520857739269"
	};
	firebase.initializeApp(config);

	firebase.database().ref('/sumeet').once('value').then(function(snapshot) {
		$scope.$apply(() => {'about'
			scope.info = (snapshot.val()) || 'Anonymous';
			scope.show = true;
		});
	});

	scope.showProjects = function(){
		var text = jQuery('#navproject')[0].innerText;

		if(text == 'Projects'){
			jQuery('#navproject')[0].innerText = 'About Me';
			scope.projectDiv = true;
			$location.hash('proj');
			$anchorScroll();
			
		}else{
			jQuery('#navproject')[0].innerText = 'Projects';
			scope.projectDiv = false;
			$location.hash('about');	
			$anchorScroll();
		}
	}

	scope.goUp = function(){
		console.log("top")
		$window.scrollTo(0, 0);
		}

}])