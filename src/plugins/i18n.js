import { createI18n } from "vue-i18n";
import { CONFIG } from "../config";
import localesEN from "../locales/en.json";

export default createI18n({
    locale: CONFIG.defaultLanguage,
    fallbackLocale: CONFIG.defaultLanguage,
    messages: {
        en: localesEN,
    },
});
