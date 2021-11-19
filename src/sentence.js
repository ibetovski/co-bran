import { reverseSyllables } from './words.js';
import { splitIntoSyllables } from './syllable.js';

export const encodeSentence = (sentence) => {
  return splitIntoWords(sentence)
  .map((item) => {
    if (item.length > 1) {
      return reverseSyllables(
        splitIntoSyllables(item)
      ).join('');
    }

    return item;
  })
  .join('');
}


export const splitIntoWords = (sentence) => {
  let result = [];
  let word = '';

  let i = 0;
  while (i < sentence.length) {
    let c = sentence[i];
    let charCode = c.charCodeAt(0);
    if (
      (charCode >= 1072 && charCode <= 1103) ||
      (charCode >= 1040 && charCode <= 1071)
    ) {
      word = `${word}${c}`;
    } else {
      if (word.length > 0) {
        result = [...result, word];
        word = '';
      }

      result = [...result, c];
    }
    i++;
  }

  if (word.length > 0) {
    result = [...result, word];
  }

  return result;
}