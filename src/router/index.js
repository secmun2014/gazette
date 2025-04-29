import Home from "../views/Home.vue";
import PDFViewer from "../components/PDFViewer.vue";

export default [
  { path: "/", component: Home },
  { path: "/EdBlazon/:id", component: PDFViewer },
  { path: "/Edmundian/:id", component: PDFViewer },
  { path: "/Magazine/:id", component: PDFViewer },
];
