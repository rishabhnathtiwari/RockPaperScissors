// Defining possible choices for the game
const choices = ["rock", "paper", "scissor"];

// For generating random choices for the computer player
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}


// images click event __________________________________________________________________
let rock = document.getElementById("fist");
let paper = document.getElementById("hand");
let scissor = document.getElementById("scissor");
let pc;



//functions for scores and storage__________________________________________________________________
let userScore = 0;
function changeUserScore(uscore) {
  document.getElementById("mscore").innerHTML = uscore;
  localStorage.setItem("userScore", uscore);
}
let pcScore = 0;
function changePcScore(pscore) {
  document.getElementById("cscore").innerHTML = pscore;
  localStorage.setItem("pcScore", pscore);
}

function localStoragecheck() {
   
    if (localStorage.getItem("userScore")) {
      userScore = parseInt(localStorage.getItem("userScore"));
      changeUserScore(userScore);
    }
  
    if (localStorage.getItem("pcScore")) {
      pcScore = parseInt(localStorage.getItem("pcScore"));
      changePcScore(pcScore);
    }

    
}

localStoragecheck();


// Reset scores function_____________________________________________________________________
function resetScores() {
    userScore = 0;
    pcScore = 0;
    changeUserScore(userScore);
    changePcScore(pcScore);
    localStorage.setItem("userScore", userScore); // Reset user score in local storage
    localStorage.setItem("pcScore", pcScore);     // Reset pc score in local storage
  }



// Getting ID's _________________________________________________________________________

let userrock = document.getElementById("fistwinuser");
let userpaper = document.getElementById("handwinuser");
let userscissor = document.getElementById("scissorwinuser");

let pcrock = document.getElementById("fistwinpc");
let pcpaper = document.getElementById("handwinpc");
let pcscissor = document.getElementById("scissorwinpc");

const footer = document.getElementById("foot");
const left = document.getElementById("leftd");
const right = document.getElementById("rightd");
const text3 = document.getElementById("winlosetext");

const nextbtn = document.getElementById("nextbtn");





// Important ID'd_________________________________________________________________________
const cont1 = document.getElementById("cont1");
const cont2 = document.getElementById("cont2");

let playbtn = document.getElementById("playbtn");






//  Rules button & box____________________________________________________________________
const toggleBtn = document.getElementById('btn');
const toggleDiv = document.getElementById('rule');
const cross = document.getElementById('cross');

toggleBtn.addEventListener('click', () => {
  console.log('clicked');
  toggleDiv.classList.remove('hidden');
  cross.classList.remove('hidden');
});

cross.addEventListener('click', () => {
  toggleDiv.classList.add('hidden');
  cross.classList.add('hidden');
});

playbtn.addEventListener("click", function () {
  playbtn.classList.add("hidden");
  nextbtn.classList.add("hidden");
  text3.classList.add("hidden");
  footer.classList.remove("hidden");
  left.classList.add("hidden");
  right.classList.add("hidden");

  userrock.classList.add("hidden");
  userrock.classList.remove("rounded-gradient-borders");

  userpaper.classList.add("hidden");
  userpaper.classList.remove("rounded-gradient-borders");

  userscissor.classList.add("hidden");
  userscissor.classList.remove("rounded-gradient-borders");

  pcrock.classList.add("hidden");
  pcrock.classList.remove("rounded-gradient-borders");

  pcpaper.classList.add("hidden");
  pcpaper.classList.remove("rounded-gradient-borders");

  pcscissor.classList.add("hidden");
  pcscissor.classList.remove("rounded-gradient-borders");

});



function afterclick(){
  text3.classList.remove("hidden");
  playbtn.classList.remove("hidden");
  footer.classList.add("hidden");
  left.classList.remove("hidden");
  right.classList.remove("hidden");
}

function win () {
  document.getElementById("text1").innerHTML = "YOU WIN";
  playbtn.innerHTML = "PLAY AGAIN";
  nextbtn.classList.remove("hidden");
}

function lose () {
  document.getElementById("text1").innerHTML = "You LOST";
  playbtn.innerHTML = "PLAY AGAIN";
}

function tie () {
  document.getElementById("text1").innerHTML = "Tie UP";
  playbtn.innerHTML = "REPLAY";
}

nextbtn.addEventListener("click", function () {
  nextbtn.classList.add("hidden");
  cont1.classList.add("hidden");
  cont2.classList.remove("hidden");
  resetScores();
});


rock.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userrock.classList.remove("hidden");
  if(pc === "rock"){
    pcrock.classList.remove("hidden");
    tie();
  }else if(pc === "paper"){
    pcpaper.classList.remove("hidden");
    pcpaper.classList.add("rounded-gradient-borders");
    lose();
    pcScore++;
    changePcScore(pcScore);
  }else{
    pcscissor.classList.remove("hidden");
    userrock.classList.add("rounded-gradient-borders");
    win();
    userScore++;
    changeUserScore(userScore);
  }
});



paper.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userpaper.classList.remove("hidden");
  if(pc === "paper"){
    pcpaper.classList.remove("hidden");
    tie();
  }else if(pc === "scissor"){
    pcscissor.classList.remove("hidden");
    pcscissor.classList.add("rounded-gradient-borders");
    lose();
    pcScore++;
    changePcScore(pcScore);
  }else{
    win();
    userpaper.classList.add("rounded-gradient-borders");
    pcrock.classList.remove("hidden");
    userScore++;
    changeUserScore(userScore);
  }
});



scissor.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userscissor.classList.remove("hidden");
  if(pc === "scissors"){
    pcscissor.classList.remove("hidden");
    tie();
  }else if(pc === "rock"){
    lose();
    pcScore++;
    changePcScore(pcScore);
    pcrock.classList.remove("hidden");
    pcrock.classList.add("rounded-gradient-borders");
  }else{
    win();
    userScore++;
    changeUserScore(userScore);
    pcpaper.classList.remove("hidden");
    userscissor.classList.add("rounded-gradient-borders");
  }
});



  


