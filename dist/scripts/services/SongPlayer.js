(function() {
	function SongPlayer($rootScope, Fixtures) {
		
		var SongPlayer = {};

 		var currentAlbum = Fixtures.getAlbum();
		
		var currentBuzzObject = null;
		
		var setSong = function(song) {
    		if (currentBuzzObject) {
           	    currentBuzzObject.stop();
                currentSong.playing = null;
            };
 	 
        
//.play() method and any bloc info around that
// Google why it's not working
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });
    };
      
   
	    SongPlayer.currentSong = null; 

        SongPlayer.currentTime = null;
   
	   SongPlayer.play = function(song) {
		song = song || SongPlayer.currentSong;
		if (SongPlayer.currentSong !== song) {
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

        SongPlayer.volume = function(volume) {
            var volume = currentBuzzObject.getVolume()
        };


        SongPlayer.setVolume = function(volume) {
            if (currentBuzzObject) { 
                currentBuzzObject.setVolume(volume)
            }
        };
	    
        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
            currentBuzzObject.setTime(time);
            }
        };


	return SongPlayer;

	}

	angular
		.module('blocJams')
		.factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();



     
        


