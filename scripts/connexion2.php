<?php
$host = 'localhost';
$dbname = 'bayeux';
$user = 'bayeux';
$pass = '1024'; // Mettez votre mot de passe si nécessaire

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}
?>