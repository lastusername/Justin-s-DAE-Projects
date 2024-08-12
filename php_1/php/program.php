
<?php
function SignUp() {
    // Retrieve data from POST request
    $username = $_POST['user'];
    $password = $_POST['pass'];

    $InDB = InDatabaseCheck($username, $password);
    if ($InDB === false) {
      $conn = StartDatabase();
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

      
    }
    else {
      echo "User already exist";
    }
    
}
function InDatabaseCheck($user1, $pass1) {
  
  

  $conn = StartDatabase();

  $sql = "SELECT Email, Passwords FROM User WHERE Email = ? AND Passwords = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('ss', $user1, $pass1);
        $stmt->execute();
        $result = $stmt->get_result();

  if ($result->num_rows < 1) {
    return false;
  } else {
    return true;
  }
  $stmt->close();
  $conn->close();
}
function login() {
  
  $username = $_POST['user1'] ?? '';
  $password = $_POST['pass1'] ?? '';
  $InDB = InDatabaseCheck($username, $password);
  if ($InDB == false) {
    echo "Welcome!";
    return true;
  } elseif ($InDB == true) {
    echo "Invalid Credentials";
    return false;
  }else {
    echo "unknown error, line ##";
  }
}
function StartDatabase () {
  $dbhost = 'localhost';
  $dbuser = 'root';
  $dbpass = 'root';
  $dbname = 'FBLA';
  
  $con = new mysqli($dbhost, $dbuser, $dbpass, $dbname); 
  if ($con->connect_error) {
    die('Could not connect: ' . $con->connect_error);
 } else {
  return $con;
 }
  
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$action = $_POST['action'] ?? '';
if ($action === 'signup') {
  SignUp();
} elseif  ($action === 'login') {
  global $Authorized;
  $Authorized = login();
} else {
    echo "Invalid request method.";
    
}
}
?>