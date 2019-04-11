// import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import { terser } from 'rollup-plugin-terser'

export default {
  input: './node_modules/hepburn/lib/hepburn.js',
  output: {
    file: 'romanize-japanese.mjs',
    format: 'esm'
  },
  plugins: [commonjs(), resolve()]
}
