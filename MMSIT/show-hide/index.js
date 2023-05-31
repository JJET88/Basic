var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var body = document.querySelector("body");
var colors = ["red", "green", "blue", "purple"];
var colors2 = ["orange", "yellow", "cyan", "tomato"];
var i = 0;

btn.onclick = function () {
  if(content1.style.color = "black"){
    content2.style.color = "cyan"
    content3.style.color ="cyan"
  }else{
    content1.style.color = "cyan" 
  }
};

btn2.onclick = function(){
   if(content2.style.color = "cyan" || content3.style.color =="cyan"){
 
    content1.style.color ="cyan"
  }else{
    content2.style.color = "black"
    content3.style.color ="black"
  }
} 





 
