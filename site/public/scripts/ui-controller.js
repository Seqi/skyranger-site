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

  // Create the text for the generate button
  var submitBtn = document.getElementById("soldier-submit-txt");
  submitBtn.value = "Generate  " + soldierCount + "  soldiers";

  // Disable if too many soldiers
  if (soldierCount > 100){
    submitBtn.disabled = true;
  }
  else{
    submitBtn.disabled = false;
  }

}
