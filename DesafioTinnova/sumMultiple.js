function sumMultiple(x) {
  let sum = 0;
  for(let i = 3; i < x; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum;
}