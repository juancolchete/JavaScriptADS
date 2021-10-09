var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  var result=0;
  if(strokes == 1){
    result = 0;
  }else if(strokes <= par - 2){
    result = 1;
  }else if(strokes == par - 1){
    result = 2;
  }else if(strokes == par){
    result = 3;
  }else if(strokes == par + 1){
    result = 4;
  }else if(strokes == par + 2){
    result = 5;
  }else{
    result = 6;
  }

  return names[result];
  // Only change code above this line
}

golfScore(4, 1);