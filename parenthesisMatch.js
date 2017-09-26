/* I like parentheticals (a lot).
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get
confusing."

Write a function that, given a sentence like the one above, along with the position of an
opening parenthesis, finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first
parenthesis), the output should be 79 (position of the last parenthesis).
*/

function parenthesisMatch(string, parenIndex) {
  // starting with parenIndex, confirm it's an open parenthetical, if it's not, throw an error.
  const parenSoFar = ['('];
  if (string[parenIndex] !== '(') {
    throw new Error('that position is not a parenthesis');
  } else {
    // if it is, store in an array;
    for (let i = parenIndex + 1; i < string.length; i++) {
      if (string[i] === '(') {
        parenSoFar.push(string[i]);
      // find the next closing,
      } else if (string[i] === ')') {
        parenSoFar.pop();
      // if after popping the array is empty, return the current index;
        if (parenSoFar.length === 0) {
          return i;
        }
      }
    }
    return 'that parenthesis does not close';
  }
}
