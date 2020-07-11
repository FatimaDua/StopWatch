var min=0;
var sec=0;
var msec=0;
var mH = document.getElementById("m");
var sH = document.getElementById("s");
var msH = document.getElementById("ms");
var interval;

function timer(){
    msec++;
    msH.innerHTML = msec;
    if(msec >= 100){
        sec++;
        sH.innerHTML = sec;
        msec =0;
    }
    else if( sec >= 60){
        min++;
        mH.innerHTML = min;
        sec = 0;
    }
}
function start(){
    interval = setInterval(timer,10);
}
function pause(){
    clearInterval(interval);
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    mH.innerHTML = 0;
    sH.innerHTML = 0;
    msH.innerHTML = 0;
    pause();
}






























// var count = 0; // how many times our timer is called/
// var interval; //where we will stop our onterval .
// function timer(){
//     count++;
//     console.log(count);
// }
// //we can directly send function() as a parameter. or seperately create a function with a name timer and then pass it out to parameter of setInterval. 

// setInterval(timer,1000 )