function removeFirstTwo(list) {
  const [,, ...rmList] = list
  return rmList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
