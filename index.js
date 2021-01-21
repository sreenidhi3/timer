let countdown;
const setTimeMin = document.querySelector(".setMins");
const setTimeSec = document.querySelector(".setSecs");
const change = document.querySelector(".countdown");
const pause = document.querySelector('.pase');
const start = document.querySelector('.start');
const resume = document.querySelector('.resume');
var running = false;
var timeNow = Date.now();

start.addEventListener('click', ()=>{
    clearInterval(countdown);
    time(Number(setTimeMin.value*60) + Number(setTimeSec.value));
})

function time(sec){
    timeNow = Date.now();
    timeThen = timeNow + (sec*1000);
    //console.log(timeNow, timeThen);
    displayTime(sec);
    startTimer(sec);
}
function startTimer(sec){
    countdown = setInterval(()=>{
        var timeLeft = Math.round((timeThen - Date.now())/1000);
        if (timeLeft === 1){
            var audio = new Audio("clock.mp3");
            console.log (audio);
            audio.play();
        }
        if (timeLeft < 0){
            clearInterval(countdown);
            return;
        }
        displayTime(timeLeft);
    }, 1000);
}
function displayTime(sec){
    const timeMin = Math.floor(sec / 60);
    const timeSec = sec % 60;
    change.innerText = `${timeMin <10 ? '0' : ''}${timeMin} : ${timeSec < 10 ? '0':''}${timeSec}`;
        //console.log(timeMin, timeSec );
}
//time(10);
/*
resume.addEventListener('click',()=>{
    running = true;
    time(timeLeft);
})

start.addEventListener('click',()=>{
    running = true;
    time(10);
})

pause.addEventListener('click',()=>{
    running = false;
}) */