const songs = [
    { title: "Song 1", src: "song1.mp3" },
    { title: "Song 2", src: "song2.mp3" },
    { title: "Song 3", src: "song3.mp3" },
    { title: "Song 4", src: "song4.mp3" },
    { title: "Song 5", src: "song5.mp3" },
    { title: "Song 6", src: "song6.mp3" },
    { title: "Song 7", src: "song7.mp3" },
    { title: "Song 8", src: "song8.mp3" },
    { title: "Song 9", src: "song9.mp3" },
    { title: "Song 10", src: "song10.mp3" },
    { title: "Song 11", src: "song11.mp3" },
    { title: "Song 12", src: "song12.mp3" },
    { title: "Song 13", src: "song13.mp3" },
    { title: "Song 14", src: "song14.mp3" },
    { title: "Song 15", src: "song15.mp3" },
    { title: "Song 16", src: "song16.mp3" },
    { title: "Song 17", src: "song17.mp3" },
    { title: "Song 18", src: "song18.mp3" },
    { title: "Song 19", src: "song19.mp3" },
    { title: "Song 20", src: "song20.mp3" },
    { title: "Song 21", src: "song21.mp3" },
    { title: "Song 22", src: "song22.mp3" },
    { title: "Song 23", src: "song23.mp3" },
    { title: "Song 24", src: "song24.mp3" },
    { title: "Song 25", src: "song25.mp3" },
    { title: "Song 26", src: "song26.mp3" },
    { title: "Song 27", src: "song27.mp3" },
    { title: "Song 28", src: "song28.mp3" },
    { title: "Song 29", src: "song29.mp3" },
    { title: "Song 30", src: "song30.mp3" },
    { title: "Song 31", src: "song31.mp3" },
    { title: "Song 32", src: "song32.mp3" },
    { title: "Song 33", src: "song33.mp3" },
    { title: "Song 34", src: "song34.mp3" },
    { title: "Song 35", src: "song35.mp3" },
    { title: "Song 36", src: "song36.mp3" },
    { title: "Song 37", src: "song37.mp3" },
    { title: "Song 38", src: "song38.mp3" },
    { title: "Song 39", src: "song39.mp3" },
    { title: "Song 40", src: "song40.mp3" },
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const songList = document.getElementById('songList');

function loadSongs() {
    renderSongList();
    if (songs.length > 0) {
        playSong(0);
    }
}

function renderSongList() {
    songList.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.onclick = () => playSong(index);
        songList.appendChild(li);
    });
}

function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[index].src;
    audioPlayer.play();
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}

function setVolume(value) {
    audioPlayer.volume = value;
}
function toggleDropdown() {
    songList.classList.toggle('show');
}
window.onload = loadSongs;
