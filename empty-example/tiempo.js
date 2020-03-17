window.onload = updateClock;

var totalTime = 10;

function updateClock() {
  
  if(totalTime == 0){
    alert('Ganaste');
  }else{
    totalTime-=1;
    setTimeout("updateClock()",1000);
  }
}