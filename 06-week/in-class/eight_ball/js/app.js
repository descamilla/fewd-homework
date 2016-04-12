// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {

  var answers = ["You May Rely On It", "Cannot Predict Now", "Yes Absolutely!", "The Answer Is Yes", "I Have No Idea", "No", "Count On It", "No Way Jose", "Es Possible"]

  function buttonClicked(){
    var question = $('#question').val()
    var randomNumber = Math.floor(Math.random() * answers.length)
    var eightBallResponse = answers [randomNumber]
    $('#output').text("Magic 8 Ball says:" + " " + eightBallResponse)
  }
  $('#submit').click(buttonClicked)

  //var colors = []


  $('#submit').click(backgroundColor)

  function backgroundColor(){
      $("body").css({background:"white",color:"black"});
      $("body").css({background:"red",color:"white"});
     $('body').attr('class','red');
    }



});
