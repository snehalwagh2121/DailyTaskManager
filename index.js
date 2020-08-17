var clock= document.querySelector(".clock");
var tasks= document.querySelector(".tasks");
var startMsg=document.querySelector(".start");
var date;
var hours, minutes, seconds;
var sound=new Audio();
sound.src='alarm.mp3'

function getTime(){
    date= new Date();
    hours= date.getHours();
    minutes= date.getMinutes();
    seconds= date.getSeconds();

    if(hours<10)
        hours= "0"+hours;
    if(minutes<10)
        minutes="0"+minutes;
    if(seconds<10)
        seconds="0"+seconds;

    var time=`${hours}:${minutes}:${seconds}`;
    // console.log(time);
    return time;
}

function fitness(){
    tasks.innerHTML+=`<div class="content">
    <span class="task">GO WORKOUT A BIT </span><span class="time">${hours}:${minutes}:${seconds}</span><i class='fa fa-trash delete' aria-hidden='true'></i>
    </div>`;
}
function gettingTime(){
    var clockTime=getTime();

    clock.innerHTML="<h1>"+clockTime+"</h1>";

    if((hours==11 || hours == 14 || hours==17 || hours== 19 || hours==00 || hours==13)&& (minutes==00 || minutes==20) && seconds==00)
        fitness();

}
function currentTime(){
    setTimeout(()=>{
        gettingTime();
        currentTime();
    },1000);
};
currentTime();

function waterAlert(){
    setTimeout(()=>{
        tasks.innerHTML+=`<div class="content">
        <span class="task">HYDRATE YOUR BODY</span><span class="time">${hours}:${minutes}:${seconds}</span><i class='fa fa-trash delete' aria-hidden='true'></i>
        </div>`;
        sound.play();
        waterAlert(); 
    }, 120000);
}
waterAlert();

tasks.addEventListener('click',e=>{
    if(e.target.classList.contains('delete'))
        e.target.parentElement.remove();
})

var startTime =getTime();
startMsg.innerHTML=startTime;