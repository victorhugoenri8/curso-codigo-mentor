
<?php 
  require "conexion.php";

  $nombre=$_GET["nombre"];
   
   if (!empty($nombre)) {
       $persona=mysqli_real_escape_string($con, $nombre);
       $datosBD=mysqli_query($con, "SELECT * FROM clientes WHERE nombre LIKE '%".$persona."%'");

       while ($fila=mysqli_fetch_assoc($datosBD)) {
          echo $fila["nombre"]. "<br> ";
       }
   }



    mysqli_close($con);

 ?>	



