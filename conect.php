<?php
$host = 'localhost'; 
$username = 'root'; 
$password = ''; 
$database = 'gaubong'; 

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}
?>
