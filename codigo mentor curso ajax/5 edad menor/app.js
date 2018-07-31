const boton=document.getElementById("boton1");
const texto=document.getElementById("empleado");


boton.addEventListener("click", lol);



function lol() {


   var ajax = new XMLHttpRequest();
   ajax.onreadystatechange = function() {
   	if (ajax.readyState == 4 && ajax.status == 200) {
   		var datos = JSON.parse(ajax.responseText);
   		let edadmenor=edad(datos);

   		texto.innerHTML= edadmenor;

   	}
   }
;
function edad (datos) {
   	let array=[];
   for (e in datos) {
   	var u=datos[e];
   	array.push(u.edad);
   };
   console.log(array)
   let j=array[0];
   for (var i = 0; i < array.length; i++) {
   	if (array[i]<j) {
   		j=array[i]
   	}
   }
   	return j


   }
   ajax.open("GET", "archivo.json", true);
   
  ajax.send();
		   
	
	  
}