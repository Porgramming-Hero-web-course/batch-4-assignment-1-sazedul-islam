
const countWordOccurrences = (sentence: string, word: string): number => {
  const regex = new RegExp(word, 'gi');
  const matches = sentence.match(regex);
  return matches? matches.length : 0;
};

// console.log(countWordOccurrences('I love typescript', 'typescript'));