<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"  href= "css/index.css">
    <link rel="stylesheet" href="css/main.css">
    <title>Document</title>
</head>

<body> 
<header>
    <nav>
        <ul>
            <li><a href="index.php">Main Page</a></li>
            <li><a href="Second.php">Second Page</a></li>
        </ul>
    </nav>
</header>
    <h1>Second page</h1>

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
echo("First of the array " . $list[0] . ". ");
echo("Second of the array " . $list[1] . ". ");
echo("Third of the array " . $list[2] . ". ");
?>

</body>
</html>