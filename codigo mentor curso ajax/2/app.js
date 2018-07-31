const boton=document.getElementById("boton1");
const texto=document.getElementById("empleado");


boton.addEventListener("click", lol);



function lol() {
  
		  
	
	  let ajax= new XMLHttpRequest();
	 ajax.onreadystatechange = function() {
	 	if (ajax.readyState == 4 && ajax.status == 200) {
	 		var response = JSON.parse(ajax.responseText);
	 		
		          var dibujar="";

		          //solo en objetos array multidimencional su puede utilizar la funcion map y tambien la funcion 
					//para un objeto literal multidimencional usar for in	
						response.map( function(emple, a,r) {
							var i=r[a];
								for (e in i) {
									
							      dibujar+=`
								              <ul>
								                <h3><li>${i[e].nombre}</li></h3><ul><li>
								               <li>Nombre: ${i[e].nombre}</li>
								               <li>Apellido: ${i[e].apellido}</li>
								               <li>Edad: ${i[e].edad}</li>
								               <li>Salario: ${i[e].salario}</li>
								               </li></ul>
								              </ul>

											`;}
							});

			 	}
	 	texto.innerHTML=dibujar;
	 };
	 ajax.open("GET", "archivo.json", true);
	 
	 ajax.send(); 
}