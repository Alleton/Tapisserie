<?php
$host = 'localhost';
$dbname = 'bayeux';
$user = 'bayeux';
$pass = '1024'; // Mettez votre mot de passe si nécessaire

try {
    $conn = new mysqli($host, $user, $pass,$dbname);
    //$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}
?>