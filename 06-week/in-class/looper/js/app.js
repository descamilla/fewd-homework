// This waits till the page finishes loading before running the code inside the {}
//if a global variable lod before the document ready
  var responses = ["yes", "no", 'ask again later', 'maybe', 'reply hazy', 'signs point to yes']

$(document).ready(function() {

  console.log("If you see this message, jQuery is working.")

  //responses.forEach(
   //function(response){
    //alert(response)
  //}
  //)

//if want to make a list version of the array

  responses.forEach(
    function(response){
     document.write(response + "<br>")
    })
document.write("<hr>")
document.write("You have " + responses.length + " Items")
});
