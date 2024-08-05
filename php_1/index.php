<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
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
    <main>
        <h1>H1 Heading</h1>
        <img src="images/Circle.jpg" alt="Image of a circle">
        <div>
            <img src="images/Circle.jpg" alt="Image of a circle">
        </div>
        <div class="Submit_Text_Div">
            <form method="POST" name="form" id="myForm">
                <h2 class="entNum2">Enter the number 2</h2>
                <input type="text" placeholder="Enter a username" name="user" required>
                <input type="password" placeholder="Enter a Password" name="pass" required>
                <input type="submit" value="Submit">
            </form>
        </div>
        <div id="result">
            <!-- AJAX response will be displayed here -->
        </div>
    </main>
    <?php echo "Hello, I wrote this with PHP." ?>
    <script src="javascript/formHandler.js"></script>
    <footer><p>Footer tag</p></footer>
</body>
</html>