export const reverseSyllables = (syllables) => {
  const charCode = syllables[0][0].charCodeAt(0);
  const isFirstLetterCapital = (charCode >= 1040 && charCode <= 1071);
  const result = syllables
    .map((c) => c.toLowerCase())
    .reverse()
    .map((c, i) => {
      // TODO: This is horrible code:
      if (i === 0 && isFirstLetterCapital) {
        return [
          c[0].toUpperCase(),
          ...c.slice(1)
        ]
        .join('')
      }

      return c;
    })

  return result;
}