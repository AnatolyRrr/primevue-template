import { createApp } from 'vue';
import { createPinia } from 'pinia';

import i18n from '@/shared/lib/locale';

import App from './App.vue';
import router from './router';
import { setupPrimeVue } from './plugins/prime-vue';

import './styles/style.pcss';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
setupPrimeVue(app);

app.mount('#app');
