import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ 
      include: ['src'],
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
      exclude: ['**/*.test.ts', '**/*.spec.ts', 'vite.config.ts', 'vite.themes.config.ts']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SwaraksaraUI',
      fileName: 'swaraksara-ui',
    },
    rollupOptions: {
      // Pastikan react tidak di-bundle (karena modular sudah punya react sendiri)
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  server: {
    port: 3001, // Atur port yang dinginkan di sini
  },
})
