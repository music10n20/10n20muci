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
    { title: "Koi Fariyaad-Jagjit Singh", src: "song32.mp3" },
    { title: "O pardesi", src: "song33.mp3" },
    { title: "Maharani - Karun, Lambo Drive", src: "song34.mp3" },
    { title: "bussiness - eminem", src: "song35.mp3" },
    { title: "rona chadta", src: "song36.mp3" },
    { title: "Juttni - Uncensored", src: "song37.mp3" },
    { title: "delhi bellyu", src: "song38.mp3" },
    { title: "Show me the meaning ", src: "song39.mp3" },
    { title: "Song 40", src: "song40.mp3" },
    { title: "chitta ve", src: "song41.mp3" },
    { title: "Why this kolaveri d", src: "song42.mp3" },
    { title: "wicked games - the weeknd", src: "song43.mp3" },
    { title: "AArambh", src: "song44.mp3" },
    { title: "Save your tears", src: "song45.mp3" },
    { title: "cnv music", src: "song46.mp3" },
    { title: "chala jata hoon kisse ki dhun mein", src: "song47.mp3" },
    { title: "IN THE JUNGLE", src: "song48.mp3" },
    { title: "Jugni ", src: "song49.mp3" },
    { title: "tere bina - himesh ", src: "song50.mp3" },
    { title: "Ek chatur naar ", src: "song51.mp3" },
    { title: "udein jab jab ", src: "song52.mp3" },
    { title: "reminder", src: "song53.mp3" },
    { title: "rusan ", src: "song54.mp3" },
    { title: "Sahara -bohemia ", src: "song55.mp3" },
    { title: "London thumkda ", src: "song56.mp3" },
    { title: " Mausam", src: "song57.mp3" },
    { title: "Right here right now", src: "song58.mp3" },
    { title: "Sochta hun  ", src: "song59.mp3" },
    { title: "Naina naal naina", src: "song60.mp3" },
    { title: "mahiya", src: "song61.mp3" },
    { title: "ishqan de lekhe", src: "song62.mp3" },
    { title: "Rabb na kra", src: "song63.mp3" },
    { title: "Alvida james", src: "song64.mp3" },
    { title: "kya yahi hai pyar", src: "song65.mp3" },
    { title: "barsant k mausam mein", src: "song66.mp3" },
    { title: "Chla jata hu kisse ki dhun mein", src: "song67.mp3" },
    { title: "life in a metro ", src: "song68.mp3" },
    { title: " mera mehboob qayamat hogi  ", src: "song69.mp3" },
    { title: "om shanti om", src: "song70.mp3" },
    { title: "standard - kambi", src: "song71.mp3" },
    { title: "bichdan - old ", src: "song72.mp3" },
    { title: "Pyar di duhai ", src: "song73.mp3" },
    { title: "rista - life in a metro", src: "song74.mp3" },
    { title: "viraniyaan ", src: "song75.mp3" },
    { title: "yahi hota pyar hai kya", src: "song76.mp3" },
    { title: "supna diljeet ", src: "song77.mp3" },
    { title: "meri mumtaaz", src: "song78.mp3" },
    { title: "kaash tera ishq ", src: "song79.mp3" },
    { title: "Nagada Sang Dhol", src: "song80.mp3" },
    { title: "try me", src: "song81.mp3" },
    { title: "khai k paan ", src: "song82.mp3" },
    { title: "Meri Bheegi Bheegi Si ", src: "song83.mp3" },
    { title: "Jhoom Barabar Jhoom ", src: "song84.mp3" },
    { title: "Dard E Disco", src: "song85.mp3" },
    { title: "Resham Ka Rumaal", src: "song86.mp3" },
    { title: "Hunterrr 303", src: "song87.mp3" }, 
    { title: "Dil Lagaana", src: "song88.mp3" }, 
    { title: "Pehle to Kabhi Kabhi", src: "song89.mp3" }, 
    { title: "Tum To Thehre Pardesi", src: "song90.mp3" }, 
    { title: "Naam Hai Tera Tera", src: "song91.mp3" }, 
    { title: "Jaaniya Lyrical | Haunted - 3D", src: "song92.mp3" }, 
    { title: "Tera Hi Bus Hona Chaahoon", src: "song93.mp3" }, 
    { title: "Uska Hi Banana", src: "song94.mp3" }, 
    { title: "Dil Toh Bachcha ", src: "song95.mp3" }, 
    { title: "Isq Risk  ", src: "song96.mp3" }, 
    { title: "KABHI NA KABH ", src: "song97.mp3" }, 
    { title: "Babam Bam - Kailash Kher", src: "song98.mp3" }, 
    { title: "humdard", src: "song99.mp3" }, 
    { title: "AYE KHUDA (Duet) ", src: "song100.mp3" }, 
    { title: "Rehnuma  ", src: "song101.mp3" }, 
    { title: "Alfazon Ki Tarah  ", src: "song102.mp3" }, 
    { title: "Punjabi Rap Star extended  ", src: "song103.mp3" }, 
    { title: "Remind me ", src: "song104.mp3" }, 
    { title: "law lg gy", src: "song105.mp3" }, 
    { title: "rap god ", src: "song106.mp3" }, 
    { title: "Sulthan - kgf", src: "song107.mp3" }, 
    { title: "Tumbbad ", src: "song108.mp3" }, 
    { title: "Sunn Raha Hai Na Tu  ", src: "song109.mp3" }, 
    { title: "Tum Dil Ki Dhadkan Mein ", src: "song110.mp3" }, 
    { title: "Dil Ne Yeh Kaha ", src: "song111.mp3" }, 
    { title: "jaa bewafa ja ", src: "song112.mp3" }, 
    { title: "aadat ", src: "song113.mp3" }, 
    { title: "happy together ", src: "song114.mp3" }, 
    { title: "khoon choos le ", src: "song115.mp3" }, 
    { title: "Aasman Ko Chukar Dekha  ", src: "song116.mp3" }, 
    { title: "I Hate You (LIKE I LOVE YOU)", src: "song117.mp3" }, 
    { title: "adhiya da nasha", src: "song118.mp3" }, 
    { title: "Afwah", src: "song119.mp3" }, 
    { title: "amplifer", src: "song120.mp3" }, 
    { title: "bedarda nii", src: "song121.mp3" }, 
    { title: "chand mera dil", src: "song122.mp3" }, 
    { title: "Daka", src: "song123.mp3" }, 
    { title: "dil - ninja", src: "song124.mp3" }, 
    { title: "din raat", src: "song125.mp3" }, 
    { title: "ek mera dil", src: "song126.mp3" }, 
    { title: "gaani", src: "song127.mp3" }, 
    { title: "Har jani aa ", src: "song128.mp3" }, 
    { title: "Hawa de warke", src: "song129.mp3" }, 
    { title: "kali benke", src: "song130.mp3" }, 
    { title: "ki banu duniya da", src: "song131.mp3" }, 
    { title: "kina chir", src: "song132.mp3" }, 
    { title: "3 salaan da pyar", src: "song133.mp3" }, 
    { title: "main tan vi pyra karda", src: "song134.mp3" }, 
    { title: "mitran de boot", src: "song135.mp3" }, 
    { title: "naam ni lena", src: "song136.mp3" }, 
    { title: "naina", src: "song137.mp3" }, 
    { title: "preeh", src: "song138.mp3" }, 
    { title: "peeran teriya", src: "song139.mp3" }, 
    { title: "pelhi nazar mein", src: "song140.mp3" }, 
    { title: "phone", src: "song141.mp3" }, 
    { title: "rabb de samaan", src: "song142.mp3" }, 
    { title: "rani melha di", src: "song143.mp3" }, 
    { title: "sou dard ", src: "song144.mp3" }, 
    { title: "shirt da button", src: "song145.mp3" }, 
    { title: "abhi kuch dino se", src: "song146.mp3" }, 
    { title: "taare dia loe", src: "song147.mp3" }, 
    { title: "tinka tinka", src: "song148.mp3" }, 
    { title: "yuhi chla chla chl", src: "song149.mp3" }, 
    { title: "zinda", src: "song150.mp3" }, 
    { title: "52 Bars", src: "song151.mp3" }, 
    { title: "tera mera milna", src: "song152.mp3" }, 
    { title: "Beparwaiyan (Refix)", src: "song153.mp3" }, 
    { title: "DIL TAN PAGAL HAI", src: "song154.mp3" }, 
    { title: "ghum shum ghum shum", src: "song155.mp3" }, 
    { title: "Ijazat", src: "song156.mp3" }, 
    { title: "Let The Music Play (Original Vocal Mix)", src: "song157.mp3" }, 
    { title: "blinding lights", src: "song158.mp3" }, 
    { title: "mera dil wich", src: "song159.mp3" }, 
    { title: "sun flower", src: "song160.mp3" }, 
   
   
   
   
   
   

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

