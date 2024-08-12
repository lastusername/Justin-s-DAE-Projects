<?php
include_once 'program.php';


function navSULI(){
    if (!isset($Authorized)|| $Authorized !== true) {
echo '<li><a href="Sign_Up.php">Sign Up</a></li>
<li><a href="login.php">Login</a></li>'; }
else {
    echo '<li><a href="profile.php">Profile</a></li>';
    echo '<li><a href="logout.php">Logout</a></li>';
}
}
?>