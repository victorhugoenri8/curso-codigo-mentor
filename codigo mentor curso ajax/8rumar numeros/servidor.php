<?php 
$num1=$_GET["num1"];
$num2=$_GET["num2"];

$respuesta="";

if (!ctype_digit($num1) || !ctype_digit($num2)) {
	$respuesta.="Por favor ingrese 2 numeros.";
} else {
	$respuesta.="<div>";
    $respuesta.= "el resultado es ".($num1+$num2);
    $respuesta.="</div>";
}


echo $respuesta;

 ?>