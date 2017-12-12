/*global $*/


//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ********************     
//GLOBAL VARIABLES

var choice=["Rock","Paper","Scissors"];

var userChoice;

userChoice=($("#input").val());

console.log();

var computerChoice;
computerChoice=choice[Math.floor(Math.random()*choice.length)];

console.log();

var winner="";
console.log();

//"https://render.fineartamerica.com/images/rendered/medium/greeting-card/images-medium-5/fist-made-of-rock-anthony-doudt.jpg" 
//"https://i.ytimg.com/vi/Zr2S9rrAHbY/maxresdefault.jpg"
//"https://previews.123rf.com/images/denisnata/denisnata1209/denisnata120900373/15334412-Woman-hand-with-scissors-isolated-on-white-background-Stock-Photo.jpg"


//FUNCTIONS
$("#shoot").click(function(){
    $("#mechoice").html($("#input").val());
});

$("#shoot").click(function(){
    if ($("#input").val() === "rock","Rock","ROckSSS"){
    $(".me").attr("src","https://render.fineartamerica.com/images/rendered/medium/greeting-card/images-medium-5/fist-made-of-rock-anthony-doudt.jpg");
    }
});




















// DOCUMENT READY FUNCTION

$( userChoice ).ready(function() {
  
});
$( computerChoice ).ready(function() {
  
});
$( winner ).ready(function() {
  
});
$( choice ).ready(function() {
  
});
