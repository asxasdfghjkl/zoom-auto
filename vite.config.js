import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins:[react()],
	// plugins: [
	// 	importToCDN({
	// 		modules: [
	// 			{
	// 				name: 'react',
	// 				var: 'React',
	// 				path: `umd/react.production.min.js`,
	// 			},
	// 			{
	// 				name: 'react-dom',
	// 				var: 'ReactDOM',
	// 				path: `umd/react-dom.production.min.js`,
	// 			},
	// 		],
	// 	}),
	// ],
	build: {
		target: 'esnext',
		lib: {
			entry: path.resolve(__dirname, 'src/main.jsx'),
			name: 'ZoomAuto',
			fileName: format => `zoom-auto.${format}.js`,
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['react', 'react-dom'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					react: 'React',
					'react-dom': 'ReactDom',
				},
			},
		},
	},
});
