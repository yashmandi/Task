<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$dob = $_POST['dob'];

// db connecttion
$conn = new mysqli("localhost", "root", "", "task1");

if ($conn->connect_error) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    $stmt = $conn->prepare("INSERT INTO contact_form (name, email, phone, dob) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $phone, $dob);
    $stmt->execute();
    echo "New record created successfully";
    $stmt->close();
    $conn->close();
}
