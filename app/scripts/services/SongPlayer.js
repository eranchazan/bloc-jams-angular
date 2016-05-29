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
 		
           
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                 SongPlayer.currentTime = currentBuzzObject.getTime();
                });
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

        /**
        * @desc Current playback time (in seconds) of currently playing song
        * @type {Number}
        */
        SongPlayer.currentTime = null;
   
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
	    /**
        * @function setCurrentTime
        * @desc Set current time (in seconds) of currently playing song
        * @param {Number} time
        */
        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
            currentBuzzObject.setTime(time);
            }
        };

        SongPlayer.volume = function(volume) {
            var currentVolume = 
        };

        SongPlayer.setVolume = function(argument) {
            
        };

	return SongPlayer;

	}

	angular
		.module('blocJams')
		.factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();






