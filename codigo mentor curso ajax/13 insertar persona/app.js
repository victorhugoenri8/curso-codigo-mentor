   //constanter y varibles
   const button=document.getElementById("boton");
   const mostrar=document.getElementById("mostrar");


//Listeners

   button.addEventListener("click", lol);


//Funciones
   function lol(){
   var nombre=document.getElementById("nombre").value;
   var apellido=document.getElementById("apellido").value;
   var ciudad=document.getElementById("ciudad").value;
   var vip=document.getElementById("vip").value;
   vip=parseInt(vip);
   console.log(typeof(vip));
      
         var ajax = new XMLHttpRequest();
        var informacionDeUsuario= "nombre=" + nombre + "&apellido=" + apellido+"&ciudad="+ciudad+"&vip="+vip;
      
           ajax.onreadystatechange = function() {

                   if (ajax.readyState == 4 && ajax.status == 200) {
                            var response = ajax.responseText;
                            mostrar.innerHTML=response;
                           }
                        };
      ajax.open("POST", "servidor.php", true);
      ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      ajax.send(informacionDeUsuario);
         

}
