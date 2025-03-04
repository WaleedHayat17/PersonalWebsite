<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address.
    $to = "your-email@example.com"; // Replace with your email address.

    // Set the email subject.
    $subject = "New Contact Form Submission";

    // Compose the email content.
    $emailContent = "First Name: $firstName\n";
    $emailContent .= "Last Name: $lastName\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message:\n$message\n";

    // Set the email headers.
    $headers = "From: $email";

    // Send the email.
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent. Please try again.";
    }
}
?>