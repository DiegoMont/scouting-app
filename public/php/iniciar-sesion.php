<?php
require_once('accesos.php');

$is_password_correct = isset($_POST['contrasena']) && $_POST['contrasena'] === PASSWORD;
if(!$is_password_correct)
    header("Location:../iniciar-sesion.php?error=password");
else {
    session_start(['cookie_lifetime' => SESSION_COOKIE_LIFETIME]);
    $_SESSION[KEY_SESION] = 4010;
    header("Location:../menu.php");
}
exit;
