
let favouriteLanguage = document.getElementById("favouriteLanguage");
favouriteLanguage.onchange=function(){

    let selectedValue =favouriteLanguage.value;
    switch(selectedValue) {

        case '1':
            break;
        case'2':
            displayOption.innerHTML="JavaScript";
            break;
        case'3':
            displayOption.innerHTML="Python";
            break;
     default:
            displayOption.innerHTML="Don\'t know";
            break;
        
    }

}