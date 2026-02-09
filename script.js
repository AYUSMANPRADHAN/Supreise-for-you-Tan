let songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
let currentSong = 0;

let audio = new Audio(songs[currentSong]);

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  audio.pause();
  currentSong = (currentSong + 1) % songs.length;
  audio = new Audio(songs[currentSong]);
  audio.play();
}

function prevSong() {
  audio.pause();
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  audio = new Audio(songs[currentSong]);
  audio.play();
}
