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
						
								for (e in response) {
									
							      texto.innerHTML+=`
								           
								                <h3>${e}</h3>

								             
											`;
											var j=response[e];
									     for (i in j) {
									     	texto.innerHTML+=`
								               
								               <li>${i}: ${j[i]}</li>
								               
								              `
									     }

										}
							

			 	}
	 	//texto.innerHTML=dibujar;
	 };
	 ajax.open("GET", "archivo.json", true);
	 
	 ajax.send(); 
}