import { createI18n } from "vue-i18n";

export const I18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages: {
    en: {
      hello: "Hello world",
      tos: "vue-i18n-next docs",
      term: "access to {0}",
    },
  },
});
