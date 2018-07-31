 const boton=document.getElementById("cargar");
 const listado=document.getElementById("listado");



///////////////////////////////////////////////////////////////////
 boton.addEventListener("click", function (e) {
 	e.preventDefault();

		    let datos;
		    if (window.XMLHttpRequest) {
		    	datos= new XMLHttpRequest();
		    } else {
		    	datos = new ActiveXObject("Microsoft.XMLHTTP");
		    };


//////////////////////////////////////////////////////////////////
    datos.onreadystatechange= function () {
    	
    	if(this.readyState === 4 && this.status === 200){

    		listado.innerHTML=`<h2>${this.responseText}</h2>`;
    	}
    };


    //////////////////////////////////////////////////////////
   datos.open("GET", "datos.txt", true);
   datos.send();


   

 });

