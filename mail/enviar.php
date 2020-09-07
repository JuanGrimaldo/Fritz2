<?php
    $destino = "fritzpoutinevancouver@gmail.com";
    $nombre = $_POST["name"];
    $correo = $_POST["email"];
    $mensaje = $_POST["message"];
    $contenido = "Name: " . $nombre . "\nEmail: " . $correo . "\nMessage: " . $mensaje;
    mail($destino, "Contact", $contenido);
    header("Location:thx.html");
?>