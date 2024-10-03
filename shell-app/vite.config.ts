import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

// Configurar o Vite com Angular usando o plugin @analogjs/vite-plugin-angular
export default defineConfig({
  plugins: [
    angular({
      inlineStylesExtension: 'scss', // Adiciona suporte a estilos SCSS
    }),
  ],
  server: {
    port: 3000, // Configura a porta do servidor
  },
});
