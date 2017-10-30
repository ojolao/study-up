/*  Write a function to merge two sorted arrays into one sorted array.

*/

function mergeArrays(array1, array2) {
  let current1 = 0;
  let current2 = 0;
  const mergedArray = [];
  while (current1 < array1.length || current2 < array2.length) {
    // if both currents < the length of their respective arrays,
    if (current1 < array1.length && current2 < array2.length) {
      // compare, push and increment the appropriate current
      if (array1[current1] < array2[current2]) {
        mergedArray.push(array1[current1]);
        current1 += 1;
      } else {
        mergedArray.push(array2[current2]);
        current2 += 1;
      }
    } else {
      // if current1 >= array1, push the remaining values in array2
      if (current1 >= array1.length) {
        while (current2 < array2.length) {
          mergedArray.push(array2[current2]);
          current2 += 1;
        }
      } else {
      // if current2 >= array2, push the remaining values in array1
        while (current1 < array1.length) {
          mergedArray.push(array1[current1]);
          current1 += 1;
        }
      }
    }
  }
  // return mergedArray
  return mergedArray;
}
