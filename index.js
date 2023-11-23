function convert() {
    var minutesInput = document.getElementById("minutes");
    var result = document.getElementById("result");
  
    var minutes = parseInt(minutesInput.value);
    var seconds = minutes * 60;
  
    result.innerHTML = minutes + " minutes is equal to " + seconds + " seconds.";
  }