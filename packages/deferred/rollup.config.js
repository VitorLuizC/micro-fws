import { terser } from 'rollup-plugin-terser';

/**
 * Creates an output options object.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
const Option = (options) => ({
  exports: 'named',
  sourcemap: true,
  ...options,
});

/**
 * An object with all configuration for `Rollup.js`.
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/main.js',
  output: [
    Option({
      file: './dist/main.js',
      format: 'commonjs',
    }),
    Option({
      file: './dist/main.esm.js',
      format: 'esm',
    }),
    Option({
      file: './dist/main.mjs',
      format: 'esm',
    }),
    Option({
      file: './dist/main.umd.js',
      name: 'createDeferred',
      format: 'umd',
    }),
    Option({
      file: './dist/main.umd.min.js',
      name: 'createDeferred',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;
