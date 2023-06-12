import Vue from 'vue';
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

import en from '@/locales/en.json';
import ru from '@/locales/ru.json';

const messages = {
  en,
  ru,
};

const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
