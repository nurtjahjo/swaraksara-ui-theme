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
      exclude: ['**/*.test.ts', '**/*.spec.ts', 'vite.config.ts', 'vite.themes.config.ts']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SwaraksaraUI',
      fileName: 'swaraksara-ui',
      formats: ['es', 'umd'] // Pastikan ES (ESM) di-generate
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
})
