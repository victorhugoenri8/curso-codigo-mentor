
<?php 
  #require "conexion.php";

  $nombre=$_POST["nombre"];
  $apellido=$_POST["apellido"]; 
  $ciudad=$_POST["ciudad"]; 
  $vip=$_POST["vip"]; 

   if (empty($nombre) || empty($apellido) || empty($ciudad) || !ctype_digit($vip)) {
     echo "llena todos los campos";
   }else{ 

       
       $datosBD=mysqli_query($con, "INSERT into clientes values ('$nombre', '$apellido', NULL, '$ciudad', '$vip')");
        echo "GRACIAS ". $nombre." ". $apellido;

      
   }



    mysqli_close($con);

 ?>	



