
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from POST request
    $username = $_POST['user'];
    $password = $_POST['pass'];

    // Process the data (e.g., validate, store in database, etc.)
    // For demonstration, let's just return the data
    echo "Received username: " . htmlspecialchars($username) . "<br>";
    echo "Received password: " . htmlspecialchars($password);
} else {
    echo "Invalid request method.";
}
?>