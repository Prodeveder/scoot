<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Prepare email content
    $to = "theprodeveder@gmail.com";
    $subject = "New Form Submission";
    $headers = "From: $email";

    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message:\n$message\n";

    // Send email
    $mailSuccess = mail($to, $subject, $emailContent, $headers);

    if ($mailSuccess) {
        echo "Form submitted successfully! Thank you.";
    } else {
        echo "Error sending email. Please try again later.";
    }
} else {
    // Handle the case where the form is not submitted via POST
    echo "Invalid request method!";
}
?>
