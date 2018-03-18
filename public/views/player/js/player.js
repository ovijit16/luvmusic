// var myAudio = document.getElementById("myAudio");

var trackList = [	"Neil young - Heart Of Gold.mp3",
					"Elvis Presley- In The Ghetto.MP3",
					"John Lennon - Imagine .mp3",
					"The Sound of Silence (Original Version from 1964).mp3",
					"Pearl Jam - Black.mp3",
					"Scorpions - Still Loving You.mp3"];
var paths = "../upload/songs/";
var tracks = [
	{title: "Heart Of Gold", artist: "Neil Young", year: "1998", genre: "Rock", albumArt: "../upload/viva_la_vida.jpg", album: "Unknown", path: paths + trackList[0]},
	{title: "In The Ghetto", artist: "Elvis Presley", year: "1970", genre: "Rock n Roll", albumArt: "../upload/led_zeppelin.jpg", album: "Unknown", path: paths + trackList[1]},
	{title: "Imagine", artist: "John Lennon", year: "1972", genre: "Rock", albumArt: "../upload/abbey_road.jpg", album: "Unknown", path: 'https://www.dropbox.com/s/yv4bkxom0srz885/John%20Lennon%20-%20Imagine%20.mp3'},
	{title: "The Sound of Silence", artist: "Simon & Garfunkel", year: "1964", genre: "Rock", albumArt: "../upload/the_wall.jpg", album: "Unknown", path: paths + trackList[3]},
	{title: "Black", artist: "Pearl Jam", year: "1984", genre: "Rock", albumArt: "../upload/ten.jpg", album: "Unknown", path: paths + trackList[4]},
	{title: "Still Loving You", artist: "The Eagles", year: "1971", genre: "Rock", albumArt: "../upload/nevermind.jpg", album: "Unknown", path: paths + trackList[5]},
];

var currentSong = Math.round(Math.random() * (tracks.length - 1));
var track = new Audio();
track.src = tracks[currentSong].path;
var isPlaying = false;

function songInfo(songTitle, artistName, albumArt) {
	var titleSong = document.getElementById('titleSong');
	var nameArtist = document.getElementById('nameArtist');
	var artAlbum = document.getElementById('albumArt');
	titleSong.innerText = songTitle;//.substring(0,30) + "...";
	nameArtist.innerText = artistName;
	artAlbum.src = albumArt;
}

// time and duration
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}
    return minutes + ':' + seconds;
}

function playPause() {
	if(isPlaying) {
		track.pause();
	} else {
		track.play();
		songInfo(tracks[currentSong].title, tracks[currentSong].artist, tracks[currentSong].albumArt);
		// showing currentTime and Duration
		setInterval(function() {
			var time = Math.round(track.currentTime);
			var cTime = time;
			var duration = Math.round(track.duration);
			var durTime = duration;
			time = time.toString().toHHMMSS();
			duration = duration.toString().toHHMMSS();
			document.getElementById('currentTime').innerText = time;
			document.getElementById('duration').innerText = duration;
			cTime = cTime * 100;
			durTime = cTime / durTime;
			$('#knotTime .ui-slider-range-min').css({
				width: durTime.toString() + "%"
			});
			$('#knotTime .ui-slider-handle').css({
				left: durTime.toString() + "%"
			});
			if(track.currentTime === track.duration){
				nextSong();
			}
		});
	}
};

track.onplaying = function() {
 	isPlaying = true;
	document.getElementById("playPause").innerHTML = "<i class='fa fa-pause'></i>";
};

track.onpause = function() {
	isPlaying = false;
	document.getElementById("playPause").innerHTML = "<i class='fa fa-play'></i>";
};

function previousSong() {
	currentSong--;
	if(currentSong < 0) {
		currentSong = tracks.length - 1;
	}
	track.src = tracks[currentSong].path;
	track.play();
	songInfo(tracks[currentSong].title, tracks[currentSong].artist, tracks[currentSong].albumArt);
}

function nextSong() {

	if (isShuffle) {
		currentSong = Math.round(Math.random() * (tracks.length - 1));
		track.src = tracks[currentSong].path;
		track.play();
		songInfo(tracks[currentSong].title, tracks[currentSong].artist, tracks[currentSong].albumArt);
	} else {
		currentSong++;
		if(currentSong > tracks.length- 1 ) {
			currentSong = 0;
		}
		track.src = tracks[currentSong].path;
		track.play();
		songInfo(tracks[currentSong].title, tracks[currentSong].artist, tracks[currentSong].albumArt);
	}
}

$(document).ready(function() {
	$('#knotTime').slider({
		min: 0,
		max: 100,
		value: 0,
		animate: true,
		range: 'min',
		slide: function(event, ui) {
			// var cTime = track.currentTime * 100;
			// var dTime = cTime / track.duration;
			updateTime(ui.value / 100);
			console.log(ui.value / 100);
		}
	});

	$('#volume').slider({
		min: 0,
		max: 100,
		value: 0,
		animate: true,
		range: 'min',
		slide: function(event, ui) {
			setVolume(ui.value / 100);
		}
	});
});

function setVolume(myVolume) {
	track.volume = myVolume;
	console.log(myVolume);
	if(myVolume == 0) {
		document.getElementById('volumeController').innerHTML = "<i class='fa fa-volume-off'></i>";
	} else {
		document.getElementById('volumeController').innerHTML = "<i class='fa fa-volume-up'></i>";
	}
}

function updateTime(cTime) {
	track.currentTime = cTime * 100;
	track.duration = track.currentTime / track.duration;
}

var isVolume = false;
function mute(event) {
	if(isVolume == false) {
		document.getElementById('volumeController').innerHTML = "<i class='fa fa-volume-off'></i>";
		setVolume(0);
		isVolume = true;
		$('#volume .ui-slider-range-min').css({
			width: "0%"
		});
		$('#volume .ui-slider-handle').css({
			left: "0%",
			transition: 'ease 0.1s'
		});
	} else {
		document.getElementById('volumeController').innerHTML = "<i class='fa fa-volume-up'></i>";
		setVolume(1);
		isVolume = false;
		$('#volume .ui-slider-range-min').css({
			width: "100%"
		});
		$('#volume .ui-slider-handle').css({
			left: "100%",
			transition: 'ease 0.1s'
		});
	}
}

var isClicked = false;
function repeatMode() {
	if(isClicked) {
		$('#repeat .fa').css({
			color: '#cccccc'
		});
		isClicked = false;
		track.loop = false;
		track.pause();
	} else {
		$('#repeat .fa').css({
			color: '#005550'
		});
		isClicked = true;
		track.loop = true;
		track.play();
	}
}

var isShuffle = false;
function shuffleMode() {
	if(isShuffle) {
		$('#shuffle .fa').css({
			color: '#cccccc'
		});
		isShuffle = false;
	} else {
		$('#shuffle .fa').css({
			color: '#005550'
		});
		isShuffle = true;
	}
	return isShuffle;
}