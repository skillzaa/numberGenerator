//import { terser } from "rollup-plugin-terser";
//import uglifyjs from 'uglifyjs';
export default {
	input: 'src/Generators.js',
//	plugins: [terser()],
	output: {
	  file: 'dist/Generators.js',
	  format: 'es',
	}
  };