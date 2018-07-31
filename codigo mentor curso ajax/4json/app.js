   const enviar=document.getElementById("enviar");
   const pintar=document.getElementById("empleado");
   //enviar.addEventListener("click", lol);


   function lol(){
 
   const a=document.getElementById("apellido").value;
   const b=document.getElementById("nombre").value;
   var informaciondeusuario="nombre="+b+"&apellido="+a;
   	var ajax = new XMLHttpRequest();
   
   	ajax.onreadystatechange = function() {

   		if (ajax.readyState == 4 && ajax.status == 200) {
   			var response = ajax.responseText;
   			empleado.innerHTML=response;
   		}
   	};
   	ajax.open("POST", "servidor.php", true);
   	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   	ajax.send(informaciondeusuario);
   }

