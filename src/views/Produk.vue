<template>
  <h1>Produk</h1>
  <div class="flex-container">
      <div v-for="produk in state" :key="produk.id" class="card">
          <router-link class="container" :to="{name: 'Detail', params: {id_produk: produk.id}}">
              <h4>{{ produk.nama }}</h4>
          </router-link>
      </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { produk } from '../assets/Produk';

export default{
  setup(props, Context){
      const state = reactive(produk["Produk"]);

    onMounted(() => {
      Context.emit("id-menu", 4);
    });
    return {
      state
    }
  }
}
</script>
<style scoped>

.card{
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  min-width: 200px;
  cursor: pointer;
}
.card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2) ;
}
.container{
  padding: 2px 16px;
}
</style>