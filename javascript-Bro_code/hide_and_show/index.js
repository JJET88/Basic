var Toggle = document.getElementById("toggle");  
var visible = document.getElementById("visibility");
var image1 = document.getElementById("myimg1");
var image2 = document.getElementById("myimg2");

Toggle.onclick = function(){
   if (image1.style.display == "none"){
       image1.style.display ="block";
   }else{
    image1.style.display = "none";
   }
}
visible.onclick = function(){
    if (image2.style.visibility == "hidden"){
        image2.style.visibility ="visible";
    }else{
     image2.style.visibility = "hidden";
}
}
