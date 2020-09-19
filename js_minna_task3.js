//Question 1
const squareNumbers1 = (arr) => {
    let squareArray = [];
    for (const i of arr) {
      squared = Math.pow(i, 2)
      squareArray.push(squared);
    }
    return squareArray;
  };
  
  const filterOddNumbers1 = (arr) => {
    let filteredNumbers = [];
    for (const i of arr) {
      if (i % 2 !== 0) {
        continue;
      } else if (i % 2 === 0) {
        filteredNumbers.push(i);
      } else {
        continue
      }
    }
    return filteredNumbers;
  };
  
  const sumArray1 = (arr) => {
    let numSum = 0;
    for (const i of arr) {
      numSum += i;
    }
    return numSum;
  };
  
  ///////////////////////////////////////////////////////////////////////////////////////
  // Question 2
  const squareNumbers2 = (arr) => {
    return arr.map(i => i ** 2)
  };
  
  const filterOddNumbers2 = (arr) => {
    return arr.filter(i => i % 2 === 0);
  };
  
  const sumArray2 = (arr) => {
    return arr.reduce((prev, cur) => prev + cur, 0);
  };
  //The map, filter and reduce methods are easier to use
  
  ////////////////////////////////////////////////////////////////////////////////////
  // Question 3
  
  const ascArray = (arr) => {
    return arr.sort(function(a, b) {
      return a - b;
    });
  };