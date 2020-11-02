export const language = {
  URNFIELD: 'urnfield',
  ROMAN: 'roman',
  ARABIC: 'arabic'
}

export const convert = (range = { start: 1, end: 10 }, language = 'arabic') => {
  if (range === null || language === null) {
    return 'invalid input'
  }
  switch (language) {
    case 'urnfield':
      return convertToUrnfield(range)
    default:
      return convertToArabic(range)
  }
}

const convertToUrnfield = (range) => {
  const current = []
  for (let i = range.start; i <= range.end; i++) {
    current.push(aracbicCharacterToUrnfield(i))
  }
  return current.join(', ')
}

const aracbicCharacterToUrnfield = (character) => {
  const fives = []
  let other = ''
  while (character >= 5) {
    fives.push('\\')
    character = character - 5
  }
  if (character !== 0) {
    other = '/'.repeat(character)
  }

  const result = other + '' + fives.join('')
  return result
}

const convertToArabic = (range) => {
  const result = []
  for (let i = range.start; i <= range.end; i++) {
    result.push(i)
  }
  return result.join(', ')
}
