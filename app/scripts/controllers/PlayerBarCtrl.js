(function() {
	function PlayerBarCtrl(Fictures, SongPlayer) {
		this.albumData = Fixtures.getAlbum();
		this.songPlayer = SongPlayer;
	}

	angular 
		.module('blocJams')
		.controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();