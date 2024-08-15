<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"  href= "css/signup.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Sign Up</title>
</head>

<body> 
<header>
    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="Sign_Up.php">Sign Up</a></li>
            <li><a href="login.php">Login</a></li>
        </ul>
    </nav>
</header>
    <h1>Sign Up page</h1>

    <div class="Submit_Text_Div">
            <form method="POST" name="form" id="myForm">
                <h1 class="entNum2">Sign_Up</h1>
                <input type="hidden" name="action" value="signup">
                <input type="text" placeholder="Enter a username" name="user" required>
                <input type="password" placeholder="Enter a Password" name="pass" required>
                <input type="submit" value="Submit">
            </form>
        </div>
        <div id="result">
            <!-- AJAX response will be displayed here -->
        </div>
    </main>
    <?php echo "Hello, I wrote this with PHP. I concatenated this sentence"; ?>
    <script src="javascript/formHandler.js"></script>








    

 <?php 

function decVar () {
    $name = "justin";
    $num = 15;
    $boolean = true;
}
$name = "justin";
$num = 15;
$boolean = true;

$list = array($name, $num, $boolean);
echo("First number of the array " . $list[0] . ". ");
echo("Second number of the array " . $list[1] . ". ");
echo("Third number of the array " . $list[2] . ". ");


$associative_ary = [
    "name" => "Justin Martinez",
    "role" => "Student",
    "career" => "Software engineer"
];
  
  echo("Name " . $associative_ary["name"] . "\n");
  echo(". Role " . $associative_ary["role"] . "\n");
  echo(". Career " . $associative_ary["career"] . "\n");
  
$matrix_array = [
    [1,2],
    [3,4],
    [5,6],
    [7,8],
    [9,10]
]; 
  echo ("Number in row 5, column 2: " . $matrix_array[3][1] . "\n");
  
  for ($i=0; $i<=4; $i++) {
    for ($e=0; $e<= 1; $e++){
        echo ("Number" . $matrix_array[$i][$e] . "\n");
    } //Create at least 1 associative array, at least 1 multi-dimensional array, and iterate through any array using a loop
  } 

  ?>
</body>
</html>