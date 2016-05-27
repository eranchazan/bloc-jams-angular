(function() {
	function SongPlayer(Fixtures) {
		
		var SongPlayer = {};

 		var currentAlbum = Fixtures.getAlbum();
		
		var currentBuzzObject = null;
		
		var setSong = function(song) {
    		if (currentBuzzObject) {
           	    currentBuzzObject.stop();
                currentSong.playing = null;
            };
 		
           
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true

        
            });
 
        // var playSong = function() {
        // 	currentBuzzObject.play();
        // 	song.playing = true;
        // }; 

        // var stopSong = function() {
        // 	currentBuzzObject.stop();
        // 	song.playing = null;
        // };

        SongPlayer.currentSong = song;
    };

  

    var getSongIndex = function(song) {
        return currentAlbum.songs.indexOf(song);
 	};
   
	SongPlayer.currentSong = null; 
   
	SongPlayer.play = function(song) {
		song = song || SongPlayer.currentSong;
		if(SongPlayer.currentSong !== song) {
		    setSong(song);
		    currentBuzzObject.play();
            song.playing = true;
		} else {
			if (currentBuzzObject.isPaused()) {
			currentBuzzObject.play();
            song.playing = true;
			}
		}	
	};
		
		SongPlayer.pause = function(song) {
			song = song || SongPlayer.currentSong;
			currentBuzzObject.pause();
			song.playing = false;
		};

		SongPlayer.previous = function() {
     		var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     		currentSongIndex--;
 			 
 			 if (currentSongIndex < 0) {
         		currentBuzzObject.stop();
                song.playing = null;
     		 } else {
         var song = currentAlbum.songs[currentSongIndex];
         setSong(song);
         currentBuzzObject.play();
         song.playing = true;
            }
 		};

 		SongPlayer.next = function() {
 			var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     		currentSongIndex++;
     		
     		if (currentSongIndex > -1) {
         		currentBuzzObject.stop();
                song.playing = null;
     		 } else {
                 var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                currentBuzzObject.play();
                song.playing = true;
                }
 		};
		
	return SongPlayer;

	}

	angular
		.module('blocJams')
		.factory('SongPlayer', SongPlayer);
})();






