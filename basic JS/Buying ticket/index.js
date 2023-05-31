 btnBuyTicket.onclick=function(){
    let userAge=document.getElementById("userAge");
    let displayTicketFees=document.getElementById("displayTicketFees");
    let btnBuyTicket=document.getElementById("btnBuyTicket");

    userAge = parseInt(userAge.value);
    console.log(userAge);

    if(userAge>60){
        displayTicketFees.innerHTML="100";
    }else if(userAge>=30){
        displayTicketFees.innerHTML="50";
    }else if(userAge>=18){
        displayTicketFees.innerHTML="20";
    }else{
        displayTicketFees.innerHTML="Free";
    }


 }
 