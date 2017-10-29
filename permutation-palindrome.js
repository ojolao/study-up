/* Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴
You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false

iterate through the string,
make sure that each character (except for one) shows up twice
use an object or maybe a set?--
yes set, at the end, if the length is 0 or 1, return true, otherwise false
*/

function permutationPalindrome(string) {
  const chars = {};
  for (let i = 0; i < string.length; i++) {
    if (chars[string.charAt(i)]) {
      delete chars[string.charAt(i)];
    } else {
      chars[string.charAt(i)] = true;
    }
  }
  const remaining = Object.keys(chars);
  return remaining.length < 2;
}

function permutationPalindromeSet(string) {
  const chars = new Set();
  for (let i = 0; i< string.length; i++) {
    if (chars.has(string.charAt(i))) {
      chars.delete(string.charAt(i));
    } else {
      chars.add(string.charAt(i));
    }
  }
  return chars.size < 2;
}
