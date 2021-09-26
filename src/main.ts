import '@purge-icons/generated';
import './styles/base.css';
import 'virtual:windi.css';
import 'virtual:windi-devtools';

import App from './App.vue';
import { Router } from '/@/router';
import { Store } from '/@/store';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';

// Router

// i18n

// WindiCSS

const app = createApp(App);

//
const i18n = createI18n({
  locale: 'en',
  messages,
});

app.use(i18n);

app.use(Router);
app.use(Store);

app.mount('#app');
