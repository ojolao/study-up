/* Write a recursive function for generating all permutations of an input string.
Return them as a set.
Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

To start, assume every character in the input string is unique.

Your function can have loops—it just needs to also be recursive.

*/

function recursivePermutations(string) {
  // store set
  const permutations = new Set();
  const recursivePermutationsHelper = (permSoFar, remStr) => {
    if (permSoFar.length === string.length) {
      return permutations.add(permSoFar); // or return permSoFar
    }
    for (let i = 0; i < remStr.length; i++) {
      const updatedPerm = permSoFar + remStr.charAt(i);
      const updatedRem = remStr.split('');
      updatedRem.splice(i, 1);
      recursivePermutationsHelper(updatedPerm, updatedRem.join(''));
    }
  };
  // need a helper function that takes permutation so far and what is left
    // base case: if permSoFar.length === string.length, add to set and return
    // iterate through what is left and call recursive case
  recursivePermutationsHelper('', string);
  // return set
  return permutations;
}
