
<?php 

    require "conexion.php";

   $nombre=$_GET['nombre'];
 
   if (!empty($nombre)) {
      $cliente=mysqli_real_escape_string($con, $nombre);

      $resultado= mysqli_query($con, "SELECT * FROM clientes WHERE nombre LIKE '%".$cliente."%'");

       while ($fila=mysqli_fetch_assoc($resultado)) {
     echo '<div onclick="toggleOverlay(this)">'.$fila['nombre'].'</div>';
     echo '<input type="hidden"  value="'.$fila['apellido'].'">';
   }


      mysqli_close($con);
        }else{
          mostrarUsuario();
        }

  function mostrarUsuario(){
     require "conexion.php";

       
       $datosBD=mysqli_query($con, "SELECT * FROM clientes ");
        

      
   while ($fila=mysqli_fetch_assoc($datosBD)) {
     echo '<div onclick="toggleOverlay(this)">'.$fila["nombre"] . '</div>';
     echo '<input type="hidden" value="'.$fila["apellido"].'">';
   }

  mysqli_close($con);
}


 ?>	



