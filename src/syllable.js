const voiceLetters = ['а', 'ъ', 'о', 'у', 'е', 'и', 'ю', 'я'];

export const countVoiceLetters = (input) => {
  const syllablesCount = Array.prototype.reduce
  .call(input, (syllablesCount, letter) => {
    if (voiceLetters.includes(letter)) {
      return syllablesCount + 1;
    }
    
    return syllablesCount;
  }, 0);

  return syllablesCount;
}


export const splitIntoSyllables = (input) => {
  
  let output      = '';

  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i];
    const nextLetter    = input[i+1];
    const letterAfterNext= input[i+2];

    output = `${output}${currentLetter}`;    
    
    if (i == 0) {
      continue;
    }

    if (
      !voiceLetters.includes(currentLetter) &&
      currentLetter === nextLetter
    ) {
      output = `${output}-`;
      continue;
    }

    if (
      voiceLetters.includes(currentLetter) &&
      !voiceLetters.includes(nextLetter) &&
      voiceLetters.includes(letterAfterNext)
    ) {
      output = `${output}-`;
      continue;
    }

    if (i == input.length - 1) {
      break
    }
  }

  return output.split('-');
}