function showTextInput(){
  document.getElementById("text-input").style.display = "inline";
  document.getElementById("twitter-input").style.display = "none";
}

function showTwitterInput(){
  document.getElementById("text-input").style.display = "none";
  document.getElementById("twitter-input").style.display = "inline";
}

function updateSoldierCount(){
  var input = document.getElementById("soldier-text-input").value;
  var soldierCount = 0;

  var lines = input.split('\n');
  for(var i = 0; i < input.split('\n').length; i++){
    if (lines[i]){
      soldierCount++;
    }
  }

  document.getElementById("soldier-count-num").innerHTML = soldierCount;
}
