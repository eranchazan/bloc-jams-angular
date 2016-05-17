(function() {
	function LandingCtrl() {
		this.heroTitle = "Turn the music up!";
	}

	angular
	.module('blocJams')
	.controllers('LandingCtrl', LandingCtrl);
}) ();