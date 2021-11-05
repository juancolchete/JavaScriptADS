function checkObj(obj, checkProp) {
    // Only change code below this line
    var keys = Object.keys(obj)
    for(var i=0;i<keys.length;i++){
      if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp];
      }else{
        return "Not Found";
      }
    }
    // Only change code above this line
  }