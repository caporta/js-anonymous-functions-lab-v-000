$(document).ready(function(){
  menu();
  play();
  pause();
  show();
});

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"},
    artists = Object.keys(jukeboxSongs),
    theArtist = artists[Math.floor(Math.random()) * artists.length],
    songToPlay = jukeboxSongs[theArtist];

function randomNumber() {
  return Math.floor(Math.random());
}

function showOptions() {
    $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
};

function menu() {
  $('#menu').on('click', showOptions);
}

function nowPlaying() {
  $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
  return "now playing " + songToPlay + " by " + theArtist;
}

function play() {
  $('#play').on('click', nowPlaying);
}

function pauseSong() {
  $('#songPaused').html(songToPlay + " is paused");
}

function pause() {
  $('#pause').on('click', pauseSong);
}

function displaySongs() {
  var songs = "";
  for (var key in jukeboxSongs) {
    songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
  }
  $('#showSongs').html(songs);
}

function show() {
  $('#show').on('click', displaySongs);
}
