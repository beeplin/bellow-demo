import html from '@rollup/plugin-html'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import telecall from 'telecall/lib/rollup-plugin'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/rollup/index.js',
    format: 'esm',
    plugins: [terser()],
  },
  plugins: [commonjs(), resolve(), typescript(), html(), telecall()],
}
