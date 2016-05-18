(function() {
 	function AlbumCtrl() {
 		this.albumData = albumPicasso
 		// this.albumData.push(angular.copy(albumPicasso));
 	} 
//album.albumData to access properties of album in DOM
 	angular
 	.module('blocJams')
 	.controller('AlbumCtrl', AlbumCtrl);
})();