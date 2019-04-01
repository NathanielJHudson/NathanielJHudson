var alarmSound = new Audio();

alarmSound.src = 'its_always_sunny.mp3';
var alarmTimer;
// set interval function keeps the clocks runnning as long as browser window is open

setInterval(function(){
    // Each var is used to display current time
    // Date object creats a new date object that includes current daye and time
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var period = 'AM';

    if(hours >= 12){
        period = 'PM';
    }
    if(hours > 12){
        hours -= 12;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + period;
    var clock = document.getElementById('clock');

    clock.innerText = clockTime;
}, 1000);


function setAlarm(button){
    var ms = document.getElementById('alarmTime').valueAsNumber;

    if(isNaN(ms)){
        alert('Invalid Date');
        
        return;
    }

    var alarm = new Date(ms);
    var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(),  alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
			
    var differenceInMs = alarmTime.getTime() - (new Date()).getTime();

    if(differenceInMs < 0){
        alert('Specified time is already passed');
        
        return;
    }

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

function snooze(){
    stopAlarm();
    alarmTimer = setTimeout(initAlarm, 300000); // 5 * 60 * 1000 = 5 Minutes
}

