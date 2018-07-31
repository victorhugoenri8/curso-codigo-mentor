const boton1=document.getElementById("boton1");
const boton2=document.getElementById("boton2");

boton1.addEventListener("click", function (e) {
			var ajax = new XMLHttpRequest();
			ajax.onreadystatechange = function() {
				if (ajax.readyState == 4 && ajax.status == 200) {
					var response = JSON.parse(ajax.responseText);
					var empleado=document.getElementById("empleado");
					
					empleado.innerHTML=`
		              <ul>
		                <li>${response.id}</li>
		                <li>${response.nombre}</li>
		 				<li>${response.trabajo}</li>
		 				<li>${response.empresa}</li>
		              </ul>

					`;
				}
			};
			ajax.open("GET", "empleado.json", true);
		
			ajax.send();
		});

boton2.addEventListener("click", function (e) {
			var ajax = new XMLHttpRequest();
			ajax.onreadystatechange = function() {
				if (ajax.readyState == 4 && ajax.status == 200) {
					var response = JSON.parse(ajax.responseText);
					var empleado=document.getElementById("empleados");
					
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
			};
			ajax.open("GET", "empleados.json", true);
		
			ajax.send();
		});


