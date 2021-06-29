import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import svgr from '@svgr/rollup';
import path from 'path';

const extensions = ['.js', '.ts', '.tsx'];

const defaultConfig = {
  input: 'src/index.ts',
  plugins: [
    svgr({
      expandProps: 'end',
    }),
    resolve({
      extensions,
      moduleDirectories: [path.resolve(__dirname, '.'), 'node_modules'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      babelHelpers: 'bundled', // TODO: Investigate 'runtime' option
      extensions,
      exclude: 'node_modules/**',
    }),
    sizeSnapshot(),
  ],
  // Note that this regex only works when using @rollup/plugin-node-resolve
  external: /node_modules/,
};

export default [
  {
    ...defaultConfig,
    output: [
      {
        file: 'dist/bundle.js',
        format: 'cjs',
        name: 'radianceUi',
      },
    ],
  },
  {
    ...defaultConfig,
    preserveModules: true,
    output: [
      {
        dir: 'dist/bundle-es',
        format: 'esm',
      },
    ],
  },
];
