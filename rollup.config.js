//import { terser } from "rollup-plugin-terser";
//import uglifyjs from 'uglifyjs';
export default {
	input: 'src/Animations.js',
//	plugins: [terser()],
	output: {
	  file: 'dist/Animations.1.0.1.js',
	  format: 'es',
	}
  };