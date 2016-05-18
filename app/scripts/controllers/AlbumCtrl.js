(function() {
 	 function AlbumCtrl(Fixtures) {
 		this.albumData = albumPicasso
 	    this.albumData = Fixtures.getAlbum();
 		// this.albumData.push(angular.copy(albumPicasso));
 	} 
//album.albumData to access properties of album in DOM
 	angular
 	.module('blocJams')
 	.controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();