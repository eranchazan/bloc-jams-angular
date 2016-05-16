(function() {
 	function AlbumCtrl(){
 		this.albumData.push(angular.copy(albumPicasso));
 	} 

 	angular
 	.module('albumViewSongItem')
 	.controller('AlbumCtrl', AlbumCtrl);
})();