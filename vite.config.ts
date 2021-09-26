import PurgeIcons from 'vite-plugin-purge-icons';
import ViteComponents from 'vite-plugin-components';
import ViteFonts from 'vite-plugin-fonts';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import WindiCSS from 'vite-plugin-windicss';
import { defineConfig } from 'vite';
import path from 'path';
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader({
      svgoConfig: {
        multipass: true,
      },
    }),
    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      extensions: ['vue'],
    }),
    // vhttps://github.com/stafyniaksacha/vite-plugin-fonts#readme
    ViteFonts({
      google: {
        families: ['Open Sans', 'Montserrat', 'Fira Sans'],
      },
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: 'prose prose-sm m-auto text-left',
    }),

    // https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
    PurgeIcons({
      /* PurgeIcons Options */
    }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      include: [path.resolve(__dirname, './locales/**')],
    }),
  ],
});
