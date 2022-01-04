// Only change code below this line
let maxNumber=0;
let flag = true;
function countdown(n){
  if(flag){
    flag = false
    maxNumber = n;
  }
  if(n < 1){
    return [];
  }else{
    const countArray = countdown(n - 1);
    countArray.push(maxNumber - n + 1);
    return countArray;
  }
}
// Only change code above this line