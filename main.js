const hepburn = require('hepburn')
const japaneseRegExp = /([\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf])+/
const isJapanese = input => input.match(japaneseRegExp)

const addSpaces = input => {
  let spaced = ''
  for (let i = 0; i < input.length; ++i) {
    spaced += input[i]
    if (i === input.length - 1) {
      continue
    }
    if (
      isJapanese(input[i]) &&
      isJapanese(input[i + 1]) &&
      !['ゃ', 'ゅ', 'ょ', '　'].includes(input[i + 1])
    ) {
      spaced += ' '
    }
  }
  return spaced
}

const fromKana = (str, beautify) => {
  if (beautify) {
    str = addSpaces(str)
  }
  let romaji = hepburn.fromKana(str)
  if (beautify) {
    romaji = romaji.toLowerCase()
  }
  return romaji
}

Object.assign(exports, hepburn, { fromKana })
