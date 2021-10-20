var count = 0;

function cc(card) {
  // Only change code below this line
  var response  = "";
  if(card <= 6){
    count++;
  }else if(!(card <= 9)){
    count--;
  }
  if(count > 0){
    response = count+" Bet" 
  }else{
    response = count+" Hold"
  }
  return response;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');