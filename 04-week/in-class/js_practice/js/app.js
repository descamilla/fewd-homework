$(document).ready(function(){
  //alert("WAIT! Don't leave just yet!")

  $("h1").click(function(){alert("you clicked the headline")})

  // var color = prompt("what color")
  // console.log(color)

  // color = "black"
  // console.log(color)

  var firstNum = 1
  var secondNum = 1
  var answer = firstNum * secondNum
  console.log("your total is:");
  console.log(answer);

  if(answer == 1) {
    alert("woohoo the answer is 1")
  }

  var lightSwitch = true

  if (lightSwitch == true) {
    alert("the lights are on")
  }else{
    alert("the lights are off")
  }
});
