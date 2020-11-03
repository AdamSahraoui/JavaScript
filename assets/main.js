
function modulo(){ 
var x = 5;
var y = 2;
alert(x % y);
}


function sendData(){ 

    var pointure= document.getElementById("pointure").value;
    var naissance= document.getElementById("naissance").value; 
    resultat = (pointure * 2 + 5)* 50 - naissance + 1769 ;
    
    alert("Le resultat est : " + resultat);
  }