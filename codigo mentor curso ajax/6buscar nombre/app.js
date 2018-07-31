const input=document.getElementById("input");
const resultado=document.getElementById("resultado");





input.onkeyup=function lol() {
  valor=document.getElementById("input").value;


   var ajax = new XMLHttpRequest();

    if (valor.length=="") {
            resultado.innerHTML="";
         } else {
            
   ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && ajax.status == 200) {
         var datos = JSON.parse(ajax.responseText);

         let x=encontrarPersona(datos,valor);

         let mensaje= (x===true)? "si fue encontrado":"NO";

         resultado.innerHTML= mensaje;

        
         

      }
   }


   ajax.open("GET", "archivo.json", true);
   
  ajax.send();
         }
		   
	
	  
}

function encontrarPersona (datos, valor)
   {

   var array=[];
   for (i in datos) {
       array.push(datos[i].nombre);
    } 
    return array.indexOf(valor) > -1;
}