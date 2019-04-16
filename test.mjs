import romanize from '.'

console.log(
  `みみ.が (beautify = false) === 'MIMI.GA' [${romanize.fromKana('みみ.が') ===
    'MIMI.GA'}]`
)

console.log(
  `みみ.が (beautify = true) === 'mi mi.ga' [${romanize.fromKana('みみ.が', true) ===
    'mi mi.ga'}]`
)
