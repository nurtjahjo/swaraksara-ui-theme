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
      // PENTING: Jangan buat type definition untuk script legacy (karena itu JS murni)
      exclude: ['src/assets/scripts/**'] 
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SwaraksaraUI',
      fileName: 'swaraksara-ui',
      formats: ['es', 'umd'] // Standar: ES untuk Vite/Webpack, UMD untuk legacy
    },
    rollupOptions: {
      // Pastikan React tidak ikut ter-bundle (Peer Dependency)
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
      },
    },
    // Pastikan minifikasi aktif untuk production
    minify: 'esbuild', 
  },
})
