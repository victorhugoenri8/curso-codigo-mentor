<h1>	comunicacion a base de datos con php </h1>
<hr>
<?php 
  require "conexion.php";

    $sql=mysqli_query($con, "SELECT nombre, apellido FROM clientes");
    $us="";
    $us.="<table>";
    $us.="<tr>";
    $us.="<th>Nombre</th>";
    $us.="<th>Apellido</th>";
    $us.="</tr>";
   
    while ($array=mysqli_fetch_array($sql)) {
    	$us.="<tr>";
    	$us.="<td>".$array["nombre"]."</td>";
    	$us.="<td>".$array["apellido"]."</td>";
    	$us.="</tr>";
    }
    $us.="</table>";
    echo $us;
    mysqli_close($con);

 ?>	



