(function() {
 	 function AlbumCtrl(Fixtures, SongPlayer) {
 	    this.albumData = Fixtures.getAlbum();
 	    this.songPlayer = SongPlayer;
 	} 
//album.albumData to access properties of album in DOM
 	angular
 	.module('blocJams')
 	.controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();