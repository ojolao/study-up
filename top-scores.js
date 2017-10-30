/* You created a game that is more popular than Angry Birds.
Each round, players receive a score between 0 and 100, which you use to rank them from
highest to lowest. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time,
but players are complaining that their rankings aren't updated fast enough. You need a faster
sorting algorithm.

Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.
*/

function topScores(unsortedScores, highestPossibleScore) {
  const scoreCount = [];
  const sortedScore = [];
  for (let i = 0; i < unsortedScores.length; i++) {
    const score = unsortedScores[i];
    if (scoreCount[score]) {
      scoreCount[score]++;
    } else {
      scoreCount[score] = 1;
    }
  }
  for (let j = highestPossibleScore; j >= 0; j--) {
    while (scoreCount[j] > 0) {
      sortedScore.push(j);
      scoreCount[j]--;
    }
  }
  return sortedScore;
}
