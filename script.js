let songs = [
  {src:"music/song1.mp3", title:"Song 1 💖"},
  {src:"music/song2.mp3", title:"Song 2 🌸"},
  {src:"music/song3.mp3", title:"Song 3 ✨"}
];

let currentSong = 0;
let music = document.getElementById("bgMusic");
let title = document.getElementById("songTitle");
let disc = document.querySelector(".disc");

function loadSong(i){
  music.src = songs[i].src;
  title.innerText = songs[i].title;
}
loadSong(currentSong);

function toggleMusic(){
  if(music.paused){
    music.play();
    disc.classList.add("spin");
  } else {
    music.pause();
    disc.classList.remove("spin");
  }
}

function nextSong(){
  currentSong = (currentSong+1)%songs.length;
  loadSong(currentSong);
  music.play();
  disc.classList.add("spin");
}

function prevSong(){
  currentSong = (currentSong-1+songs.length)%songs.length;
  loadSong(currentSong);
  music.play();
  disc.classList.add("spin");
}

function changeVolume(v){ music.volume=v; }

music.addEventListener("ended",nextSong);

function toggleNight(){ document.body.classList.toggle("night"); }

let counter=0;
function score(){
  counter++;
  document.getElementById("count").innerText="Score: "+counter;
}

function quiz(ans){
  document.getElementById("quizResult").innerText=
  ans==="right"?"Correct 💖":"Try Again 😜";
}

function reveal(){
  document.getElementById("secretMsg").innerText=
  "Tanisha… you are truly special to me 💖✨";
}

setInterval(()=>{
  let heart=document.createElement("div");
  heart.className="heart";
  heart.innerText="💖";
  heart.style.left=Math.random()*100+"vw";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),4000);
},800);

let notes=["You are rare ✨","Stay amazing 💖","Dream big 🌸","You can do it 💪"];
setInterval(()=>{
  let note=document.createElement("div");
  note.className="popup";
  note.innerText=notes[Math.floor(Math.random()*notes.length)];
  note.style.left=Math.random()*80+"vw";
  note.style.top=Math.random()*80+"vh";
  document.body.appendChild(note);
  setTimeout(()=>note.remove(),3000);
},5000);

function fireworks(){
  for(let i=0;i<30;i++){
    let spark=document.createElement("div");
    spark.className="heart";
    spark.innerText="✨";
    spark.style.left=Math.random()*100+"vw";
    document.body.appendChild(spark);
    setTimeout(()=>spark.remove(),3000);
  }
}

/* Slideshow */
let slides=[
  {src:"images/t1.jpg",cap:"Your smile 💕"},
  {src:"images/t2.jpg",cap:"Pure happiness ✨"},
  {src:"images/t3.jpg",cap:"Always glowing 🌸"}
];
let s=0;
setInterval(()=>{
  s=(s+1)%slides.length;
  document.getElementById("slide").src=slides[s].src;
  document.getElementById("caption").innerText=slides[s].cap;
},3000);
