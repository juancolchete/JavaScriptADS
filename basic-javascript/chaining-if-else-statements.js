function testSize(num) {
    // Only change code below this line
    var result = "";
    if(num < 5){
      result = "Tiny";
    }else if(num < 10){
      result = "Small";
    }else if(num < 15){
      result = "Medium";
    }else if(num < 20){
      result = "Large";
    }else{
      result = "Huge";
    }
  
    return result;
    // Only change code above this line
  }
  
  testSize(7);