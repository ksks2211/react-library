import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';
import path from 'node:path';




// https://vitejs.dev/config/
export default defineConfig({
  // root: "./src/components",
  plugins: [
    react(),
    dts({insertTypesEntry: true,}),],
  build: {
    // If it's a library build, change rollupOptions
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'MyLib',
      formats: ['es', 'umd'],
      fileName: (format) => `my-lib.${format}.js`      
    },
    rollupOptions: {
      // input: 'src/components/index.ts',
      external: ['react', 'react-dom'], // Mark React and ReactDOM as external dependencies,  'styled-components'

      output: {
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            // 'styled-components': 'styled',
        },
    },
    }
  }
})
