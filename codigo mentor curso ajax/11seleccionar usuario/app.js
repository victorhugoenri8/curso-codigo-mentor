   
   //enviar.addEventListener("click", lol);
const mostrar=document.getElementById("mostrar");

   function lol(usuarioSeleccionado){
      console.log(usuarioSeleccionado);
         var ajax = new XMLHttpRequest();

      if (usuarioSeleccionado === "") {
         mostrar.innerHTML="";
      } else {
           ajax.onreadystatechange = function() {

                   if (ajax.readyState == 4 && ajax.status == 200) {
                            var response = ajax.responseText;
                            mostrar.innerHTML=response;
                           }
                        };
      ajax.open("GET", "servidor.php?usuario="+usuarioSeleccionado, true);
      //ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      ajax.send();
         }

}
