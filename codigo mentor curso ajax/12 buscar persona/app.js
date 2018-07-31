   
   //enviar.addEventListener("click", lol);
const mostrar=document.getElementById("mostrar");

   function lol(nombre){
      console.log(nombre);
         var ajax = new XMLHttpRequest();

      if (nombre === "") {
         mostrar.innerHTML="";
      } else {
           ajax.onreadystatechange = function() {

                   if (ajax.readyState == 4 && ajax.status == 200) {
                            var response = ajax.responseText;
                            mostrar.innerHTML=response;
                           }
                        };
      ajax.open("GET", "servidor.php?nombre="+nombre, true);
      //ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      ajax.send();
         }

}
