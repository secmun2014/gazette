import Home from "../views/Home.vue";
import About from "../views/About.vue";
import PDFViewer from "../views/PDFViewer.vue";

export default [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/EdBlazon/:id", component: PDFViewer },
  { path: "/Edmundian/:id", component: PDFViewer },
  { path: "/Magazine/:id", component: PDFViewer },
];
