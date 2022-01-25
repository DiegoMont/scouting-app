<?php
require_once('php/accesos.php');

if(session_id() === '')
    session_start();

$exists_a_valid_session = isset($_SESSION[KEY_SESION]);
if(!$exists_a_valid_session){
    header('Location:iniciar-sesion.php');
    exit;
}
