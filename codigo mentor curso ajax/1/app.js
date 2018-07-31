//const empleado=document.getElementById("empleado");
const boton=document.getElementById("boton1");
const empleado=document.getElementById("empleado");

boton.addEventListener("click", ajax);


function ajax(){
	        let url="empleado.json";
			  let ajax;

			if (window.XMLHttpRequest) {
		      ajax= new XMLHttpRequest();
		    } else {
		    	 ajax = new ActiveXObject("Microsoft.XMLHTTP");
		    };

				
			ajax.onreadystatechange = function() {
				if (ajax.readyState == 4 && ajax.status == 200) {
					var response = JSON.parse(ajax.responseText);
					
                    var dibujar="";
					response.forEach( function(emple) {
					      dibujar+=`
		              <ul>
		                <li>${emple.id}</li>
		                <li>${emple.nombre}</li>
		 				<li>${emple.trabajo}</li>
		 				<li>${emple.empresa}</li>
		              </ul>

					`;
					});

					/*for (i in response) {
	                 dibujar+=`
		              <ul>
		                <li>${response[i].id}</li>
		                <li>${response[i].nombre}</li>
		 				<li>${response[i].trabajo}</li>
		 				<li>${response[i].empresa}</li>
		              </ul>

					`;
                   }*/
					empleado.innerHTML=dibujar;
				}
				}
				ajax.open("GET", url, true);
		
			ajax.send();
}
