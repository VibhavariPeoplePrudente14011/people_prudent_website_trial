<?php

require 'config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer autoloader
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Database connection details
$servername = "localhost";
$username = "peopleprudent_db";
$password = "prudent_user";
$dbname = "Pru014@indiawebsite";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500); // Internal Server Error
    exit('Database connection failed: ' . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data
    $firstname = isset($_POST['Firstname']) ? $_POST['Firstname'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $phone_number = isset($_POST['Phone']) ? $_POST['Phone'] : '';
    $position = isset($_POST['Position']) ? $_POST['Position'] : '';

    // Handle file upload
    $resume = isset($_FILES['file-808']) ? $_FILES['file-808'] : null;

    // Check if file was uploaded without errors
    if ($resume && $resume['error'] == UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        $uploadFilePath = $uploadDir . basename($resume['name']);

        // Move the uploaded file to the server's filesystem
        if (!move_uploaded_file($resume['tmp_name'], $uploadFilePath)) {
            http_response_code(500); // Internal Server Error
            exit('Failed to move uploaded file.');
        }
    } else {
        http_response_code(500); // Internal Server Error
        exit('File upload error.');
    }

    // Insert form data into the database
    $stmt = $conn->prepare("INSERT INTO career_form (firstname, email, phone, position, resume_path) VALUES (?, ?, ?, ?, ?)");
    if (!$stmt) {
        http_response_code(500); // Internal Server Error
        exit('Prepare statement failed: ' . $conn->error);
    }

    $stmt->bind_param("sssss", $firstname, $email, $phone_number, $position, $uploadFilePath);

    if ($stmt->execute()) {
        // Data inserted successfully, send email

        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->SMTPDebug = 0;
            $mail->isSMTP(); // Set mailer to use SMTP
            $mail->CharSet = "utf-8"; // set charset to utf8
            $mail->SMTPAuth = true; // Enable SMTP authentication
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption, `ssl` also accepted

            $mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
            $mail->Port = 587; // TCP port to connect to
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );
            $mail->isHTML(true); // Set email format to HTML

            $mail->Username = 'vibhavari.p@peopleprudent.co.in'; // SMTP username
            $mail->Password = 'rcud shlf lxoz coww'; // SMTP password

            $mail->setFrom('vibhavari.p@peopleprudent.co.in', 'Career form Received'); // Your application NAME and EMAIL

            // Add subject line
            $mail->Subject = 'Career Form at peopleprudent';

            // Email body
            $mail->Body = "<b>Name :</b> $firstname<br><br>
                          <b>Email :</b> $email<br><br>
                          <b>Phone No :</b> $phone_number<br><br>
                          <b>Position :</b> $position<br><br>";

            // Attach the uploaded resume
            $mail->addAttachment($uploadFilePath, $resume['name']);

            // Add recipient
            $mail->addAddress('vibhavari.p@peopleprudent.co.in'); // Client mail ID

            $mail->send();

            // Delete the uploaded file from the server after sending the email
            unlink($uploadFilePath);

            // Close statement handle
            $stmt->close();

            // Return success response
            http_response_code(200); // OK
            exit('success');
        } catch (Exception $e) {
            http_response_code(500); // Internal Server Error
            exit('Error sending email: ' . $mail->ErrorInfo);
        }
    } else {
        http_response_code(500); // Internal Server Error
        exit('Execute failed: ' . $stmt->error);
    }
}

// Close database connection
$conn->close();
?>