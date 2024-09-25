var user;

function updateNav() {
   
    
    fetch('/php_1/php/program.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'action': 'login'
        })
    })

    .then(response => response.text())  // Get the response as plain text
    .then(data => {
        userStatus = data;  // This will be 'authorized' or 'unauthorized'
        user = data;
        

        console.log("before user status")
        console.log(userStatus);  // Log the status
    })
    .catch(error => console.error('Error:', error));




const navSignLog = document.getElementById('NavSignLog');
/*if (typeof userStatus !== 'undefined') {
    console.log("the blovk has been called")
    if (userStatus === true) {
    // User is logged in
    // navSignLog.innerHTML = "<li><a href=\"profile.php\">Profile</a></li><li><a href=\"logout.php\">Logout</a></li>";
    const signUpItem = document.querySelector('li > a[href="Sign_Up.php"]').parentElement;
    const loginItem = document.querySelector('li > a[href="login.php"]').parentElement;
    signUpItem.remove();
    loginItem.remove();
  } }*/
if(user === 'authorized'){
    console.log('userStatus found')
    const signUpItem = document.querySelector('li > a[href="Sign_Up.php"]').parentElement;
    const loginItem = document.querySelector('li > a[href="login.php"]').parentElement;
    signUpItem.remove();
    loginItem.remove();

}
}
    