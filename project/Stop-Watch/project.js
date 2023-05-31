window.onload = function () {
    var minute = 00;
    var second = 00;

    var frontcount = document.getElementById("min");
    var backcount = document.getElementById("sec");
    var Start = document.getElementById("start-btn");
    var Stop = document.getElementById("stop-btn");
    var Reset = document.getElementById("reset-btn");

    var Interval;

    Start.onclick = function () {
        Interval = setInterval(startTimer, 10);
    };
    Stop.onclick = function () {
        clearInterval(Interval);
    }
    Reset.onclick = function () {
        clearInterval(Interval);
        minute = "00";
        second = "00";
        frontcount.innerHTML = minute;
        backcount.innerHTML = second;
    }
    function startTimer() {
        second++;
        if (second <= 9) {
            backcount.innerHTML = "0" + second;
        } else {
            backcount.innerHTML = second;
        }
        if (second > 99) {
            console.log("seconds");
            minute++;
            frontcount.innerHTML = "0" + minute;
            second = 0;
            backcount.innerHTML = "0" + 0;
        }
        if (minute > 9) {
            frontcount.innerHTML = minute;

        }

    }
}