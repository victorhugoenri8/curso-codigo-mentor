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
      ajax.open("GET", "servidor.php?persona="+"persona", true);
      //ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      ajax.send();
         

 };

lol();

//document.getElementById("mirar").addEventListener("click", toggleOverlay);



//     function buscarUsuario(e){

//       var ajax2 = new XMLHttpRequest();
//       ajax2.onreadystatechange = function() {
//         if (ajax2.readyState == 4 && ajax2.status == 200) {
//           var response = ajax2.responseText;
//               mostrar.innerHTML=response;
//         }
//       };
//       ajax2.open("GET", "servidor.php?nombre="+e, true);
//       //ajax2.setRequestHeader("Content-type", "application/json");
//       ajax2.send();


//     };

    function toggleOverlay(e){
     
     
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

     let elNombre=e.parentElement.parentElement.firstChild.textContent;
     let elApellido=e.parentElement.parentElement.firstChild.nextSibling.textContent;
     let elEmail=e.parentElement.parentElement.firstChild.nextSibling.nextSibling.textContent;
      
      info.innerHTML=` 
                      <strong>Nombre: ${elNombre}.
                      <br> Apellido: ${elApellido}.
                      <br> Email: ${elEmail}.
                      <br><br>
                      <button onclick="toggleOverlay(this)">Cerrar</button>
                      </strong>
                      `;

};


    function formar(){

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

     
      
      info.innerHTML=` <form action=""  method="post" enctype="multipart/form-data" >
        <div id="" class="form-group">
          
        <label for="">Nombre:</label>
        <input class="form-group" type="text" name="txtNombre" placeholder="" id="txtNombre" require="" onkeyup="buscarUsuario(this.value)">
        </br>

        <label for="">ApellidoM:</label>
        <input class="form-group" type="text" name="txtApellidoM" placeholder="" id="txtApellidoM" require="">
        </br>
        
        <label for="">ApellidoPaterno:</label>
        <input class="form-group" type="text" name="txtApellidoP" placeholder="" id="txtApellidoP" require="">
        </br>

        <label for="">Ciudad:</label>
        <input class="form-group" type="text" name="txtCiudad" placeholder="" id="txtCiudad" require="">
        </br>

        <label for="">Correo:</label>
        <input class="form-group" type="text" name="txtCorreo" placeholder="" id="txtCorreo" require="">
         </br>

    
        <label for="">Foto:</label>
        <input class="form-group" type="text" name="txtFoto" placeholder="" id="txtFoto" require="">
   
        <br>
      <div class="container  btn-group">
        
      
          <button value="btnAgregar" onclick=agregarUsuario() type="submit" name="accion" class="btn btn-success" >Agregar</button>
           <button value="btnCancelar" onclick="toggleOverlay(this)" type="submit" name="accion" class="btn btn-warning">Cancelar</button> 
          </div>

       </div>
     </form>`;

};

function editarusuario(usuarioID){
  

   let nombreID= "nombreID" + usuarioID;
   let emailID= "emailID" + usuarioID;
   let borrar= "borrar" + usuarioID;
   let actualizar= "actualizar" + usuarioID;
   let editarNombreID=nombreID + "-editar";
   
   
   let abrirInputEmail=emailID+"-editar";
   let editarEmail=document.getElementById(emailID).innerHTML;


   let nombreDelUsuario=document.getElementById(nombreID).innerHTML;
   let parent=document.querySelector("#" + nombreID);
   let parentEmail=document.querySelector("#"+emailID);

   if (parent.querySelector("#" + editarNombreID ) === null) {
       document.getElementById(nombreID).innerHTML = `<input type="text" id="${editarNombreID}" value="${nombreDelUsuario} ">`;
       document.getElementById(borrar).disabled="true";
       document.getElementById(actualizar).style="display:block";
   };

   if(parentEmail.querySelector("#"+abrirInputEmail)=== null){
 
         document.getElementById(emailID).innerHTML=`<input type='text' id='${abrirInputEmail}' value='${editarEmail}'/> `

    }
};



function actualizarUsuario(usuarioID){
      let nombreActualizado=document.getElementById("nombreID" + usuarioID + "-editar").value;

      
      var ajax3 = new XMLHttpRequest();
      ajax3.onreadystatechange = function() {
        if (ajax3.readyState == 4 && ajax3.status == 200) {
        //var response = ajax3.responseText;
         //mostrar.innerHTML=response;
         lol();
        }
      };
      ajax3.open("GET", "servidor.php?usuarioIDActualizado="+usuarioID + "&nombreActualizado="+nombreActualizado, true);
      
      ajax3.send();
};



function usuarioEliminado(usuarioID){

  let respuesta=confirm("Desea Eliminar EL Usuario Seleccionado?.");

  if (respuesta === true) {
  
  var ajax4 = new XMLHttpRequest();
      ajax4.onreadystatechange = function() {
        if (ajax4.readyState == 4 && ajax4.status == 200) {
        //var response = ajax3.responseText;
         //mostrar.innerHTML=response;
         lol();
        }
      };
      ajax4.open("GET", "servidor.php?usuarioIDEliminado="+usuarioID, true);
      
      ajax4.send();

  }
};

function agregarUsuario (argument) {
    let usuarioNuevo=document.getElementById("txtNombre").value;
  let apellidoNuevo= document.getElementById("txtApellidoP").value;
    let correoNuevo= document.getElementById("txtCorreo").value;


    var ajax5 = new XMLHttpRequest();
      ajax5.onreadystatechange = function() {
        if (ajax5.readyState == 4 && ajax5.status == 200) {
        
         lol();
        }
      };
      ajax5.open("GET", "servidor.php?usuarioNuevo="+usuarioNuevo + "&apellidoNuevo="+apellidoNuevo + "&correoNuevo="+correoNuevo, true);
      
      ajax5.send();


}



