import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      include: ['src'],
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
      exclude: ['src/core/fontAwesomeEngine.js']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SwaraksaraUI',
      // KITA KUNCI NAMA FILENYA
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    minify: 'esbuild',
    emptyOutDir: true, // Pastikan dist bersih sebelum build
  },
})
