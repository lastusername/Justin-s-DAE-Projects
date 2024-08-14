console.log("Script loaded");

$(document).ready(function() {
    function handleFormSubmission(event) {
      console.log("Form submission triggered"); // Debugging line
      event.preventDefault(); // Prevent the default form submission
  
      $.ajax({
        type: "POST",
        url: "php/program.php", // Path to your PHP script
        data: $("#myForm").serialize(), // Serialize form data
        success: function(response) {
          console.log("Request succeeded"); // Debugging line
          $("#result").html(response); // Display the response in the #result div
        },
        error: function(xhr, status, error) {
          console.log("Request failed: " + error); // Debugging line
          $("#result").html("An error occurred. Please try again.");
        }
      });
    }
  
    // Attach the function to the form submission
    $("#myForm").submit(handleFormSubmission);
  });