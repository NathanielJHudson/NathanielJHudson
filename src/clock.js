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
