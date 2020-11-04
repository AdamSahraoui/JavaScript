
function divideThem(){ 
var numberOne= document.getElementById("numberOne").value;
var numberTwo= document.getElementById("numberTwo").value;
var result= (numberOne % numberTwo);
return result;
}




function displayAlert(){ 
      var myResult = divideThem();
      alert(myResult);
  }
  





function sendData(){ 

    var pointure= document.getElementById("pointure").value;
    var naissance= document.getElementById("naissance").value; 
    resultat = (((((pointure * 2) + 5)* 50) - naissance) + 1769) ;
    
    alert("Le resultat est : " + resultat);
  }


function age() {
    var old= document.getElementById("old").value;

    if(old>18)
    alert("Vous êtes majeur");

    if(old<18)
    alert("Vous êtes mineur");


}

function setNewImage(){

document.getElementById("img1").src="../exoJS/assets/photoexo/photo2.jpg";

}

function setOldImage(){

  document.getElementById("img1").src="../exoJS/assets/photoexo/photo1.jpg";

}