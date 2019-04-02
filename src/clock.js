var alarmSound = new Audio();

alarmSound.src = 'its_always_sunny.mp3';
var alarmTimer;

// set interval function keeps the clocks runnning as long as browser window is open
setInterval(function(){
    // Each var is used to display current time hours/ mins/ seconds.
    // Date object creats a new date object that defines current daye and time
    var currentTime = new Date();
    var hours = currentTime.getHours();
    // varys reference current time object and use get method
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var period = 'AM';

    if(hours >= 12){
        period = 'PM';
    }
    // below statments displays time in 12 hrs not 24 hrs
    if(hours > 12){
        hours -= 12;
    }

    // nelow  if state displays 0 when seconds fall into single digits
    if(seconds < 10){
        seconds = '0' + seconds;
    }

    // below if statment displays 0 when mins fall into single digits
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    //    clockTime fathers all above vars and puts them together!
    var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + period;
    // use js method below
    var clock = document.getElementById('clock');

    clock.innerText = clockTime;
}, 1000);
// 1000 is above is interval for clock.innerText = clock time to run every mil sec.


function setAlarm(button){
// above function to acces set alarm button.
    var ms = document.getElementById('alarmTime').valueAsNumber;
    // abouve var will provide mil sec as a number for user to provide input

    // below if statment alerts user if there is an invalid date entered.
    if(isNaN(ms)){
        alert('Enter Correct Date :(');
        
        return;
    }
    // once app has the date below we're converting it ontp a js  date object
    var alarm = new Date(ms);
    var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(),  alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
    // above convert date object into UTC.
    var differenceInMs = alarmTime.getTime() - (new Date()).getTime();
    // above find the difference between alarm time and current time in mil sec.
    // by subtracting the two values.


    // when the difference in time is less than 0.
    if(differenceInMs < 0){
        alert('Too Late!');
        
        return;
    }
    // set time out starts function
    alarmTimer = setTimeout(initAlarm, differenceInMs);
    button.innerText = 'Cancel Alarm';
    button.setAttribute('onclick', 'cancelAlarm(this);');
}

function cancelAlarm(button){
    clearTimeout(alarmTimer);
    button.innerText = 'Set Alarm';
    button.setAttribute('onclick', 'setAlarm(this);');
}

function initAlarm(){
    alarmSound.play();
    document.getElementById('alarmOptions').style.display = '';
}

function stopAlarm(){
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById('alarmOptions').style.display = 'none';
    cancelAlarm(document.getElementById('alarmButton'));
}

