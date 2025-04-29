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
    defaultTheme: "default",
    themes: {
      default: {
        dark: false,
        colors: {
          primary: "#005bac", // UN blue for action elements
          secondary: "#003366", // Deep navy for structure
          accent: "#ffd700", // Gold for highlights
          surface: "#1e1e1e", // Darker surface for cards and containers
          background: "#121212", // Pure dark background
          success: "#007a3d", // UN green for success indicators
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
