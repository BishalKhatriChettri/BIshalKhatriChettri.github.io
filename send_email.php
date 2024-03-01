<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Email information
  $to = "bishalkhatrichettri1@gmail.com"; // Change this to your email
  $subject = "Contact Form Submission";
  $headers = "From: $name <$email>";
  $message_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  // Send email
  if (mail($to, $subject, $message_body, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Email sending failed...";
  }
} else {
  // If the form is not submitted, redirect back to the form
  header("Location: your_contact_form.html");
}
?>
