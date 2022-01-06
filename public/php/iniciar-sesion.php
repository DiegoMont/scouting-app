<?php
require_once('php/accesos.php');

if(session_id() === '')
  session_start(['cookie_lifetime' => 86400]);

if (!isset($_SESSION["sesion"]) || $_SESSION["sesion"] !== KEY_SESION){
  header("Location:index.php");
  exit;
}