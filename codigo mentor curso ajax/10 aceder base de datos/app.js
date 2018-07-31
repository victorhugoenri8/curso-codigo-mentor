   
   //enviar.addEventListener("click", lol);


   function lol(){
 


   	var ajax = new XMLHttpRequest();
   
   	ajax.onreadystatechange = function() {

   		if (ajax.readyState == 4 && ajax.status == 200) {
   			var response = ajax.responseText;
   			empleado.innerHTML=response;
   		}
   	};
   	ajax.open("GET", "servidor.php", true);
   	//ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   	ajax.send();
   }

