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
            <?php include_once 'php/nav.php'; navSULI(); ?>
        </ul>
    </nav>
</header>
    <h1>Login page</h1>

    <div class="Submit_Text_Div">
            <form method="POST" name="form" id="myForm">
                <h1 class="entNum2">Login</h1>
                <input type="hidden" name="action" value="login">
                <input type="text" placeholder="Enter a username" name="user1" required>
                <input type="password" placeholder="Enter a Password" name="pass1" required>
                <input type="submit" value="Submit">
            </form>
        </div>
        <div id="result">
            <!-- AJAX response will be displayed here -->
        </div>
    </main>
    <?php echo "Hello, I wrote this with PHP. I concatenated this sentence"; ?>
    <script src="javascript/formHandler.js"></script>

</body>
</html>