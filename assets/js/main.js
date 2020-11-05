
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

    var shoeSize= document.getElementById("shoeSize").value;
    var birthDate= document.getElementById("birthDate").value; 
    var resultat = (((((shoeSize * 2) + 5)* 50) - birthDate) + 1769);
    
    alert("Le resultat est : " + resultat);
  }


function age() {
    var old= document.getElementById("old").value;

    if(old>=18)
    alert("Vous êtes majeur");

    else
    alert("Vous êtes mineur");


}

function setNewImage(){

document.getElementById("img1").src="../exoJS/assets/photoexo/photo2.jpg";

}

function setOldImage(){

  document.getElementById("img1").src="../exoJS/assets/photoexo/photo1.jpg";

}

function myFunction(){
  var dificult= document.getElementById("dificult").value;
  
  alert(dificult)
}

