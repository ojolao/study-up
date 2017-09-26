/* You're working on a secret team solving coded transmissions.
Your team is scrambling to decipher a recent message, worried it's a plot to break into a major
European National Cake Vault. The message has been mostly deciphered, but all the words are
backwards! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a string message and reverses the order of the words
in-place

When writing your function, assume the message contains only letters and spaces, and all words
are separated by one space.
*/

function reverseString(string) {
  const wordArr = string.split(' ');
  let start = 0;
  let end = wordArr.length - 1;
  while (start < end) {
    const temp = wordArr[start];
    wordArr[start] = wordArr[end];
    wordArr[end] = temp;
    start += 1;
    end -= 1;
  }
  return wordArr.join(' ');
}