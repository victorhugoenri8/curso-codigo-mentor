   var boton1=document.querySelector("#boton");
   const resultado=document.getElementById("resultado");
   boton1.addEventListener("click", lol);


   function lol(){
 
   const a=document.getElementById("n1").value;
   const b=document.getElementById("n2").value;
   var cadena="num1="+a+"&num2="+b;
   	var ajax = new XMLHttpRequest();
   
   	ajax.onreadystatechange = function() {

   		if (ajax.readyState == 4 && ajax.status == 200) {
   			var response = ajax.responseText;
   			resultado.innerHTML=response;
   		}
   	};
   	ajax.open("GET", "servidor.php?"+ cadena, true);
   	//ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   	ajax.send();
   }

