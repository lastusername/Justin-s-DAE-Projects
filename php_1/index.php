<!DOCTYPE html>
<html>
    <head>
        <title>Hello</title>
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/main.css">
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
            <form method="POST" name="form" action="php/program.php">
                <h2 class="entNum2">Enter the number 2</h2>
                <input type="text" placeholder="Enter a uesername" name="user">
                <input type="password" placeholder="Enter a Passsword" name="pass">
                <input type="submit" placeholder="submit">
            </form>
        </div>
        <div>
           
        </div>
    </main>

    <?php echo("Hello, I wrote this with PHP." . " I concatinated this sentence"); 
    ?>
        
    <?php echo("hello, I will use a string value to display my name. Name: $name. Cool right? now I will use a Integer value to display an integer. Int:  $num. You see that?");
        echo Credentials();
    ?>

        


    <footer><p>Footer tag</p></footer>
        
        
        


    </body>
</html>