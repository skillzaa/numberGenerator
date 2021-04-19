import { terser } from "rollup-plugin-terser";
//import uglifyjs from 'uglifyjs';
export default {
	input: 'src/Animation.js',
	plugins: [terser()],
	output: {
	  file: 'dist/base/Animation.js',
	  format: 'es',
	}
  };