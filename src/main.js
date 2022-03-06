import { createApp } from "vue";
import VueApexCharts from "vue3-apexcharts";
import { createPinia } from "pinia";
import App from "./App.vue";
import i18n from "./plugins/i18n";

const app = createApp(App);

app.use(VueApexCharts);
app.use(createPinia());
app.use(i18n);

app.mount("#app");
