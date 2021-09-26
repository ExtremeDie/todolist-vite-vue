import '@purge-icons/generated';
import './styles/base.css';
import 'virtual:windi.css';
import 'virtual:windi-devtools';

import Api from './services/api';
import App from './App.vue';
import { Router } from '/@/router';
import { Store } from '/@/store';
import VueAxios from 'vue-axios';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';

const app = createApp(App);

const i18n = createI18n({
  locale: 'en',
  messages,
});

app.use(i18n);

app.use(Router);
app.use(Store);
app.use(VueAxios, Api);

app.mount('#app');
