   //constanter y varibles
   const mostrar=document.getElementById("mostrar");
   

//Listeners
 


//Funciones
   
   function lol(){
      
         var ajax = new XMLHttpRequest();
        //var informacionDeUsuario= "nombre=" + nombre + "&apellido=" + apellido+"&ciudad="+ciudad+"&vip="+vip;
      
           ajax.onreadystatechange = function() {

                   if (ajax.readyState == 4 && ajax.status == 200) {
                            var response = ajax.responseText;
                            mostrar.innerHTML=response;
                           }
                        };
      ajax.open("GET", "servidor.php", true);
      //ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      ajax.send();
         

};
    function buscarUsuario(e){

      var ajax2 = new XMLHttpRequest();
      ajax2.onreadystatechange = function() {
        if (ajax2.readyState == 4 && ajax2.status == 200) {
          var response = ajax2.responseText;
              mostrar.innerHTML=response;
        }
      };
      ajax2.open("GET", "servidor.php?nombre="+e, true);
      //ajax2.setRequestHeader("Content-type", "application/json");
      ajax2.send();


    };

    function toggleOverlay(elemento){

      let overlay=document.getElementById("overlay");
      let informacionDelUsuario=document.getElementById("informacionDelUsuario");   
      let info= document.getElementById("info");

     overlay.style.opacity  = .6;
     if (overlay.style.display == "block") {
       overlay.style.display = "none";
       informacionDelUsuario.style.display = 'none'
     }else{
        overlay.style.display = 'block';
       informacionDelUsuario.style.display = 'block'
     }

     let elNombre=elemento.innerHTML;
     let elApellido=elemento.nextSibling.value;

     info.innerHTML=` <strong>Nombre: ${elNombre}. <br> Apellido:${elApellido}.</strong>`;


    }



