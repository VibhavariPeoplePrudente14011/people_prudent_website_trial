<?php
$host = 'localhost';
$dbname = 'peopleprudent_db'; // Chosen professional database name
$username = 'prudent_user'; // Replace with your actual username
$password = 'Pru014@indiawebsite'; // Replace with your actual password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
?>
