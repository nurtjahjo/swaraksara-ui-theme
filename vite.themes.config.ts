import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // TAMBAHKAN INI: Agar path aset menjadi relatif (../assets/...)
  base: './', 

  build: {
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        authormgm: resolve(__dirname, 'src/themes/authormgm/index.css'),
        storemgm: resolve(__dirname, 'src/themes/storemgm/index.css'),
        narratormgm: resolve(__dirname, 'src/themes/narratormgm/index.css'),
        usermgm: resolve(__dirname, 'src/themes/usermgm/index.css'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'themes/[name][extname]';
          }
          // Font dan aset lain masuk ke assets
          return 'assets/[name][extname]';
        },
      },
    },
  },
});