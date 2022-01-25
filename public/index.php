<?php
//Constante para contraseña
require_once('php/accesos.php');

session_start(['cookie_lifetime' => SESSION_COOKIE_LIFETIME]);

//Mensaje de error
$mensaje = "";

//Si ya hay una sesion iniciada, redirigir a menu
$sesion_iniciada = isset($_SESSION[KEY_SESION]);
if($sesion_iniciada)
    header('Location:menu.php');
else
    header('Location:iniciar-sesion.php');
exit;
