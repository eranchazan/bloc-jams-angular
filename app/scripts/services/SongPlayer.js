(function() {
	function SongPlayer(Fixtures) {
		/**
 		* @desc Create SongPlayer object
 		* @type {Object}
 		*/
		var SongPlayer = {};
		/**/

 		var currentAlbum = Fixtures.getAlbum();
		
		/**
 		* @desc currentBuzzObject object audio file
 		* @type {Object}
 		*/
		var currentBuzzObject = null;
		/**
 		* @function setSong
 		* @desc Stops currently playing song and loads new audio file as currentBuzzObject
 		* @param {Object} song
 		*/
		var setSong = function(song) {
    		if (currentBuzzObject) {
       	    currentBuzzObject.stop();
            currentSong.playing = null;
    }/**
 		* @desc Creates a new Buzz  Object and loads the audio file for the actual music
 		* @type {Object}
 		*/
 
       currentBuzzObject = new buzz.sound(song.audioUrl, {
         formats: ['mp3'],
         preload: true
    });
       /**
       * @function playSong
 		* @desc Calls the Buzz library play method on the current song
 		* Sets the playing property to true
 		@type object
 		*/
 
    var playSong = function() {
    	currentBuzzObject.play();
    	song.playing = true;
    }   
    /**
 		* @desc sets the currentSong object to the song object 
 		* @type object
 		*/

    currentSong = song;
    };

    var getSongIndex = function(song) {
    return currentAlbum.songs.indexOf(song);
 	};
    /**
    * @desc currentSong object audio file
 		* @type {Object}
 		*/
	SongPlayer.currentSong = null;
    /**
    	* @public function  
 		* @desc if currentSong object does not equal the currently playing song, set song to currently playing song. Else if currently playing song does equal the currently playing song and it is paused, then play it. 
 		* @type object
 		*/
	SongPlayer.play = function(song) {
		song = song || SongPlayer.currentSong;
		if(SongPlayer.currentSong !== song) {
		 setSong(song);
		 playSong();
			} else if (SongPlayer.currentSong === song) {
				if (currentBuzzObject.isPaused()) {
						playSong(song);
				}
			}	
		};
		/**
 		* @function public function
		* @desc Pauses the currently playing Buzz object and changed the playing property to false. 
 		* @type 
 		*/
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
         SongPlayer.currentSong.playing = null;
     		 } else {
         var song = currentAlbum.songs[currentSongIndex];
         setSong(song);
         playSong(song);
     }
 		};
		/**
 		* @desc Returns the original SongPlayer object  
 		* @type
 		*/

		return SongPlayer;
	}

	angular
		.module('blocJams')
		.factory('SongPlayer', SongPlayer);
})();