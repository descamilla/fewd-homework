// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {

  console.log("If you see this message, jQuery is working.")

  // Your code goes here

    $(".subscribe-me").subscribeBetter({
      animation: "fade",
      autoClose: true,
      delay: 500,
      showOnce: false
    });
  });
