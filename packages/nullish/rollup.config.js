import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

/**
 * A `string` used as copyright notice that is injected in generated bundles. It
 * contains package's name, version, author and license information.
 */
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${pkg.author.name} <${pkg.author.email}> (${pkg.author.url})
 * Released under the MIT License.
 */
`;

/**
 * Creates an output options object.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
const Option = (options) => ({
  banner,
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
      file: './dist/main.umd.js',
      name: 'Either',
      format: 'umd',
    }),
    Option({
      file: './dist/main.umd.min.js',
      name: 'Either',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;