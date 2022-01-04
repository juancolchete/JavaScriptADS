function rangeOfNumbers(startNum, endNum) {
    if(endNum < 1){
      return [];
    }else{
      const countArray = rangeOfNumbers(startNum,endNum - 1);
      if(endNum >= startNum){
        countArray.push(endNum);
      }
      return countArray;
    }
  };