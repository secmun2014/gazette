import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router/index";
import piniaPersist from "pinia-plugin-persistedstate";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App);

const pinia = createPinia();

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "gazette",
    themes: {
      gazette: {
        dark: false,
        colors: {
          primary: "#38383d",
          secondary: "#38383d", 
          accent: "#c3c3c5", 
          surface: "#f2f2f2",
          background: "#f2f2f2", 
          success: "#38383d",
        },
      },
    },
  },
});

pinia.use(piniaPersist);

app.use(router);

app.use(vuetify);

app.use(pinia);

app.mount("#app");
