<?php 

function decVar () {
    $name = "justin";
    $num = 15;
    $boolean = true;
}
$name = "justin";
$num = 15;
$boolean = true;
/*
line 14 code
if ($usrChoice !== 4 || $userChoice !== 2) {
    return "You made an error, please try again";
    } else {
        return "good job, you got it right!";
    */


function Credentials () {
    $usr = $_POST['user'];
    $pass = $_POST['pass'];
    if (!$usr || !$pass ) {

        return  "Missing fields";
    }else {
        return "valid";
    } 
    }

?> 