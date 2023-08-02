import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/views/Home.vue"; 
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Produk from "@/views/Produk.vue";
import Detail from "@/views/Detail.vue";
import DetailKategori from "@/views/DetailKategori.vue";
import Kategori from "@/views/Kategori.vue";
import NotFound from "@/views/NotFound.vue"

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/Produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/Kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/DetailKategori/:id_kategori",
    name: "DetailKategori",
    component: DetailKategori,
    props: true,
  },
  {
    path: "/:patMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    
  },
  {
    path: "/Detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;