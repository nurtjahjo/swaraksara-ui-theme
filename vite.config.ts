import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import fs from 'fs';

// --- CUSTOM PLUGIN: COPY ICONS ---
// Pengganti vite-plugin-static-copy agar tidak ada isu dependency version
const copyIconsToDist = () => {
  return {
    name: 'copy-icons-native',
    closeBundle: () => {
      const srcDir = resolve(__dirname, 'src/assets/icons');
      const destDir = resolve(__dirname, 'dist/icons');

      if (fs.existsSync(srcDir)) {
        console.log('📂 [Build] Menyalin ikon ke folder dist/icons...');
        // fs.cpSync tersedia di Node v16.7+ (Standar untuk project Vite modern)
        fs.cpSync(srcDir, destDir, { recursive: true });
      } else {
        console.warn('⚠️ [Build] Folder src/assets/icons tidak ditemukan. Ikon tidak disalin.');
      }
    }
  }
};

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        replaceAttrValues: { '#000': 'currentColor', '#000000': 'currentColor' }, 
      },
    }),
    copyIconsToDist(), // <--- Panggil plugin custom kita
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
  server: {
    port: 3001,
  },
})
