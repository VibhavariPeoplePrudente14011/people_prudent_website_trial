<?php

require 'config.php';

$servername = "localhost";
$username = "peopleprudent_db";
$password = "prudent_user";
$dbname = "Pru014@indiawebsite";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Connection failed: ' . $conn->connect_error]);
    exit;
}

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone_number = htmlspecialchars($_POST['phone_number']);
    $msg_subject = htmlspecialchars($_POST['msg_subject']);
    $message = htmlspecialchars($_POST['message']);

    // Insert data into database
    $sql = "INSERT INTO contact_form (name, email, phone_number, msg_subject, message) VALUES ('$name', '$email', '$phone_number','$msg_subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['success' => true, 'message' => 'Form Data Submitted Successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error: ' . $conn->error]);
    }
}

// Close connection
$conn->close();
?>