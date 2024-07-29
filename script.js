const songs = [
    { title: "Hanuman chalisa", src: "song1.mp3" },
    { title: "hale Dil", src: "song2.mp3" },
    { title: "bumping my shoe", src: "song3.mp3" },
    { title: "Apun jaisa tapori", src: "song4.mp3" },
    { title: "heart shape box - nirvana", src: "song5.mp3" },
    { title: "Kali denali", src: "song6.mp3" },
    { title: "Tu raja ki raj dulari", src: "song7.mp3" },
    { title: "Tumhein Dillagi Bhool Jani Paray Gi", src: "song8.mp3" },
    { title: "Hanumanji aarti", src: "song9.mp3" },
    { title: "tujhi mein dundu", src: "song10.mp3" },
    { title: "tumse yu milegenge", src: "song11.mp3" },
    { title: "adhiya", src: "song12.mp3" },
    { title: "Aai jo teri yaad - saaya ", src: "song13.mp3" },
    { title: "Nirvana - The Man Who Sold The World", src: "song14.mp3" },
    { title: "viah di khabar", src: "song15.mp3" },
    { title: "Salli khushi", src: "song16.mp3" },
    { title: "Beautiful - eminem", src: "song17.mp3" },
    { title: "Rooh - bohemia", src: "song18.mp3" },
    { title: "Raaz-1 All songs", src: "song19.mp3" },
    { title: "Kurti bohemia", src: "song20.mp3" },
    { title: "dil ibadat", src: "song21.mp3" },
    { title: "Dev d", src: "song22.mp3" },
    { title: "Awaarapan Banjarapan", src: "song23.mp3" },
    { title: "likhe jo khat tujhe", src: "song24.mp3" },
    { title: "JEe karda", src: "song25.mp3" },
    { title: "Yaa ali", src: "song26.mp3" },
    { title: "RAAZ reboot all", src: "song27.mp3" },
    { title: "Nightcall - drive", src: "song28.mp3" },
    { title: "App ki kashish", src: "song29.mp3" },
    { title: "banda re -raaz 2", src: "song30.mp3" },
    { title: "AYE MERI ZINDAGI", src: "song31.mp3" },
    { title: "Official: 'Koi Fariyaad' Full Video Song - Jagjit Singh", src: "song32.mp3" },
    { title: "O pardesi", src: "song33.mp3" },
    { title: "Maharani - Karun, Lambo Drive", src: "song34.mp3" },
    { title: "bussiness - eminem", src: "song35.mp3" },
    { title: "rona chadta", src: "song36.mp3" },
    { title: "Juttni - Uncensored", src: "song37.mp3" },
    { title: "delhi bellyu", src: "song38.mp3" },
    { title: "Show me the meaning ", src: "song39.mp3" },
    { title: "Song 40", src: "song40.mp3" },
    { title: "chitta ve", src: "song41.mp3" },
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


function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[index].src;
    document.getElementById('currentSongTitle').textContent = songs[index].title; // Update song title display
    audioPlayer.play();
   
}