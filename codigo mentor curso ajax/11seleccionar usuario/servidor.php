
<?php 
  require "conexion.php";

  $usuario=$_GET["usuario"];
  $usuario=(int)$usuario;

    $sql=mysqli_query($con, "SELECT * FROM `clientes` WHERE `id_cliente` = $usuario");
    $us="";
    $us.="<table>";
    $us.="<tr>";
    $us.="<th>Nombre</th>";
    $us.="<th>Apellido</th>";
    $us.="</tr>";
   
    while ($array=mysqli_fetch_assoc($sql)) {
    	$us.="<tr>";
    	$us.="<td>".$array["nombre"]."</td>";
    	$us.="<td>".$array["apellido"]."</td>";
    	$us.="</tr>";
    }
    $us.="</table>";
    echo $us;
    mysqli_close($con);

 ?>	



