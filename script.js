// reverse string use for loop
const readFunction = (str) => {
  let fullname = "";

  for (let i = str.length - 1; i >= 0; i--) {
    fullname += str[i];
  }
  if (str === fullname) {
    return true;
  } else {
    return false;
  }
};
console.log(readFunction("isi"));

// reverse string use reverse()
const reverseString = (string) => {
  const name = string.split("").reverse().join("");
  if (name === string) {
    return true;
  } else {
    return false;
  }
};
console.log(reverseString("bumi"));

// --------------------><--------------------\\
// the addition of the diagonal array 3 x 3
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, 12],
];
const diagonalProduct = (arr) => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        product *= arr[i][j];
      }
    }
  }
  return product;
};
console.log(diagonalProduct(arr));
