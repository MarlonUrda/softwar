<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { stores } from '../../data'

const route = useRoute()
const storeName = route.params.storeName
const storeInfo = ref(null)

onMounted(() => {
  storeInfo.value = stores.find((store) => store.storeName == storeName)
})
</script>

<template>
  <div v-if="storeInfo" class="container">
    <img :src="storeInfo.storeImage" />
    <h1>{{ storeInfo.storeName }}</h1>
    <p>{{ storeInfo.description }}</p>
    <div class="product-container">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in storeInfo.products" :key="product.id">
            <td>{{ product.productName }}</td>
            <td>${{ product.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else>
    <h1>Tienda no encontrada</h1>
  </div>
</template>

<style scoped></style>
