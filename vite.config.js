import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/models/**/*',
          dest: 'assets/models'
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.gltf$/.test(assetInfo.name)) {
            return 'assets/models/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});