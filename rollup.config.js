// import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import { terser } from 'rollup-plugin-terser'

export default {
  input: 'main.js',
  output: {
    file: './build/romanize-japanese.mjs',
    format: 'es'
  },
  plugins: [commonjs(), resolve()]
}
