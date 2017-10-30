/* I have an array of n + 1 numbers. Every number in the range 1..n appears once
except for one number that appears twice.
Write a function for finding the number that appears twice.

*/

function findDuplicate(array) {
  for (let i = 0; i < array.length; i++) {
    const index = array[i] - 1;
    if (array[index] === false) {
      return array[i];
    } else {
      array[index] = false;
    }
  }
  return 'no duplicate';
}

function findDuplicate1(array) {
  const n = array.length - 1;
  const totalSum = (n + 1) * (n/2);
  let arraySum = 0;
  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
  }
  return arraySum - totalSum;
}