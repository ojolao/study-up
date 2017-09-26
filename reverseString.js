/*
Write a function to reverse a string in-place.
Since strings in JavaScript are immutable ↴ , first convert the string into an array of
characters, do the in-place reversal on that array, and re-join that array into a string before
returning it. This isn't technically "in-place" and the array of characters will cost O(n)
additional space, but it's a reasonable way to stay within the spirit of the challenge. If you're
comfortable coding in a language with mutable strings, that'd be even better!
*/

function reverseString(string) {
  const stringArr = string.split('');
  let start = 0;
  let end = stringArr.length - 1;
  while (start < end) {
    const temp = stringArr[start];
    stringArr[start] = stringArr[end];
    stringArr[end] = temp;
    start += 1;
    end -= 1;
  }
  return stringArr.join('');
}