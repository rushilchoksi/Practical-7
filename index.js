setInterval(
    function showTime(){
        var timeObject = new Date();
        var currentTime = timeObject.getHours() + ":" + timeObject.getMinutes() + ":" + timeObject.getSeconds();
        document.getElementById("showTime").innerHTML = currentTime;
    }, 1000);
