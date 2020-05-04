// Button pressed using mouse
var soundsA = { "k" : "crash.mp3",
                "l" : "kick-bass.mp3",
                "j" : "snare.mp3",
                "w" : "tom-1.mp3",
                "a" : "tom-2.mp3",
                "s" : "tom-3.mp3",
                "d" : "tom-4.mp3"
              };
for(var i =0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function () {
    this.classList.toggle("chng-color");
    playSound(this.textContent);
    btnAnimation(this.textContent);
  });
}

// KeyeEvent
document.addEventListener("keypress", function (event){
  var key = event.key;
  if(key === 'k' || key === 'l' || key === 'j' || key === 'w' || key === 'a' || key === 's' || key === 'd'||
      key === 'K' || key === 'L' || key === 'J' || key === 'W' || key === 'A' || key === 'S' || key === 'D'){
        playSound(key);
        btnAnimation(key);
      }
});

function playSound(s){
  var audio = new Audio("sounds/"+soundsA[s]);
  audio.play();
}

function btnAnimation(key){
  var acvtiveBtn = document.querySelector("."+key);
  acvtiveBtn.classList.add("pressed");
  setTimeout(function(){
    acvtiveBtn.classList.remove("pressed");
  },200);

}
