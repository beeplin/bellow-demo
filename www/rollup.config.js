import html from '@rollup/plugin-html'
import resolve from '@rollup/plugin-node-resolve'
import sucrase from '@rollup/plugin-sucrase'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import tsPathsResolve from 'rollup-plugin-ts-paths-resolve'
import telecall from 'telecall/lib/rollup-plugin'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist/rollup/',
    format: 'esm',
    sourcemap: true,
    plugins: [terser()],
  },
  plugins: [
    tsPathsResolve(),
    commonjs(),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript'],
    }),
    // typescriptPaths(),
    resolve(),
    html(),
    telecall(),
  ],
}
