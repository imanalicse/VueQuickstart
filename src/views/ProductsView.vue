<template>
  <div>
    <h1>This is an products page</h1>
    {{ products }}
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "./../httpClient";

let products = ref({});
function loadProducts() {
  axiosClient.get('/products')
    .then((resp) => {      
      products.value = resp.data;
      console.log('products', products)      

        // let _self = this;
        // setTimeout(function () {
        //   _self.mappingCart();
        // }, 100)
    })
    .catch(err => {
      console.log(err);
    });
}

onMounted(() => {
  console.log(`This is from on mounted`);
  loadProducts();
})

</script>
