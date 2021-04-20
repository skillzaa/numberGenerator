//import { terser } from "rollup-plugin-terser";
//import uglifyjs from 'uglifyjs';
export default {
	input: 'src/Vibrate.js',
//	plugins: [terser()],
	output: {
	  file: 'dist/Vibrate.js',
	  format: 'cjs',
	}
  };