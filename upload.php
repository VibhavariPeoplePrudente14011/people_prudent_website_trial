<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $uploadDir = 'uploads/';

    // Create uploads directory if it doesn't exist
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    // Handle Contact Us form
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $phone_number = htmlspecialchars($_POST['phone_number']);
        $msg_subject = htmlspecialchars($_POST['msg_subject']);
        $message = htmlspecialchars($_POST['message']);
        $uploadFile = $uploadDir . basename($_FILES['resume']['name']);

        // Check file type
        $fileType = pathinfo($uploadFile, PATHINFO_EXTENSION);
        if (!in_array($fileType, ['pdf', 'doc', 'docx'])) {
            echo "Error: Only PDF, DOC, or DOCX files are allowed.";
            exit;
        }

        // Move the uploaded file to the desired directory
        if (move_uploaded_file($_FILES['resume']['tmp_name'], $uploadFile)) {
            echo "Form submitted successfully!<br>";
            echo "Name: $name<br>";
            echo "Email: $email<br>";
            echo "Phone Number: $phone_number<br>";
            echo "Subject: $msg_subject<br>";
            echo "Message: $message<br>";
            echo "Resume: <a href='$uploadFile'>" . htmlspecialchars(basename($_FILES['resume']['name'])) . "</a>";
        } else {
            echo "Error: There was an error uploading your file.";
        }
    } else {
        echo "Error: Invalid form submission.";
    }
} else {
    echo "Error: Invalid request method.";
}
?>
