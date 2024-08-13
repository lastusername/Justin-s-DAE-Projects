let navSignLog = document.getElementById ("NavSignLog") 

fetch('program.php')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));


    function NavSULI () {
    if (data == false) {
        navSignLog.innerHTML = "<li><a href=\"index.php\">Home</a></li><li><a href=\"Sign_Up.php\">Sign Up</a></li><li><a href=\"login.php\">Login</a></li>"
    }
    elseif (data == true)
        navSignLog.innerHTML = "'<li><a href=\"profile.php\">Profile</a></li> <li><a href=\"logout.php\">Logout</a></li>"
}
    