var front = document.getElementById("min");
var back = document.getElementById("sec");
var Start = document.getElementById("startbtn");
var Stop = document.getElementById("stopbtn");
var Reset = document.getElementById("resetbtn");

var min = 00;
var sec = 00;

var Interval;

Start.onclick = function(){
    Interval = setInterval(startTimer,10);
}
Stop.onclick = function(){
   clearInterval(Interval);
}

Reset.onclick = function(){
    clearInterval(Interval);
    min = "00";
    sec ="00";
    front.innerHTML= min;
    back.innerHTML = sec;
}

function startTimer(){
    sec++;
     
    if (sec<=9){
        back.innerHTML= "0" + sec;
    }else{
        back.innerHTML = sec;
    }
    if (sec>99){
        min++;
        front.innerHTML = "0" + min;
        sec = 00;
        
        if(min > 9){
            front.innerHTML= min;
        }
    }


}
