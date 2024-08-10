
<?php

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'root';
$dbname = 'FBLA';

$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);


if($conn->connect_error) {
   die('Could not connect: ' . $conn->connect_error);
}



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $action = $_POST['action'] ?? '';
  if ($action === 'signup') {
    // Retrieve data from POST request
    $username = $_POST['user'];
    $password = $_POST['pass'];

    $sql = $conn->prepare("INSERT INTO User (Email, Passwords) VALUES (?, ?)");
    $sql->bind_param("ss", $username, $password);
  
    if ($sql->execute()) {
      echo "New record created successfully";
    } else {
      echo "Error:  " . $sql->error;
    }
    
     $sql->close();
     $conn->close();
    // For demonstration, let's just return the data
    echo "Received username: " . htmlspecialchars($username) . "<br>";
    echo "Received password: " . htmlspecialchars($password);
} elseif  ($action === 'login') {
  // Retrieve data from POST request
  $user_login = $_POST['user1'] ?? '';
  $pass_login = $_POST['pass1'] ?? '';


  $sql = $conn->prepare("INSERT INTO User (Email, Passwords) VALUES (?, ?)");
  $sql->bind_param("ss", $user_login, $pass_login);

  if ($sql->execute()) {
    echo "New record created successfully";
  } else {
    echo "Error:  " . $sql->error;
  }
    echo "Received username: " . htmlspecialchars($user_login) . "<br>";
   echo "Received password: " . htmlspecialchars($pass_login);
} else {
    echo "Invalid request method.";
    $conn->close();
} 

   
  
   
?>