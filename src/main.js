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
          primary: "#1a1a1a", // Soft black — headlines, main text
          secondary: "#1a1a1a", // Dark gray — subtext, metadata
          accent: "#7a7a7a", // Medium gray — muted interactive elements
          surface: "#f2f2f2", // White — card/content background
          background: "#f2f2f2", // Light gray — page background
          success: "#3d3d3d", // Neutral gray — used if needed, not green
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
