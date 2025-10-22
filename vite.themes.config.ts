import { defineConfig } from 'vite';
import { resolve } from 'path';

// Konfigurasi ini HANYA untuk membangun file CSS tema
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        authormgm: resolve(__dirname, 'src/themes/authormgm/index.css'),
        storemgm: resolve(__dirname, 'src/themes/storemgm/index.css'),
        narratormgm: resolve(__dirname, 'src/themes/narratormgm/index.css'),
      },
      output: {
        // Simpan file CSS di dalam subfolder 'themes' di dalam 'dist'
        assetFileNames: 'themes/[name].css',
      },
    },
    // Pastikan folder output bersih setiap kali build tema
    emptyOutDir: true,
  },
});