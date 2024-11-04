let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;

        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash"); // here .flash is added to that random div
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250); // after this given time the flash class is removed 
};


function userflash(btn) {
    btn.classList.add("userflash"); // here .flash is added to that random div
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 180); // after this given time the flash class is removed 
};

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let inx = Math.floor(Math.random() * 3);
    let randcolor = btns[inx];// choose a random index from 0-3 and choose a btn from the btns array
    let randbtn = document.querySelector(`.${randcolor}`);// 
    // console.log(inx);
    // console.log(randcolor);
    //console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
};

function checkans(inx) {
    let idx = level - 1;
    if (userseq[inx] == gameseq[inx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 750);
        }
    }
    else 
    {
        h2.innerHTML = `Game over!! Your score was <b>${level}</b> </br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
};

function btnpress() {
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length - 1);
};


let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
};

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;

}