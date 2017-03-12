(function(){
  var i=0;
  var t=3;
  var timInt;
  var timOut;
  var cnt = document.getElementsByClassName("safety__count")[0]
  var alert = document.getElementsByClassName("safety__alert")[0];

  alert.style.visibility = "hidden";

  function hold() {
    timInt = window.setInterval(showTime,1000);
    timOut = window.setTimeout(submitSafety,4000);
    alert.style.visibility = "hidden";
  }

  function release(){
    if (timOut) window.clearTimeout(timOut);
    window.clearInterval(timInt);
    i=0;
    t=3;
  }

  function showTime(){
    if(t==0){
      window.clearInterval(timInt);
      cnt.innerHTML= "Go";
      t=3;
    }else{
      cnt.innerHTML=t;
      t--;
    }
  }

  function submitSafety() {
    alert.style.visibility = "initial";
  }

  var sft = document.getElementById("safety");
  sft.addEventListener("mousedown", hold);
  document.body.addEventListener("mouseup", release);
}());
