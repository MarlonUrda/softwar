<script setup>
import { stores } from '../../data'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Tienda</th>
          <th>Categoría</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="store in stores" :key="store.id">
          <RouterLink :to="`/store/${store.storeName}`">
            <td>{{ store.storeName }}</td>
          </RouterLink>
          <td>{{ store.category }}</td>
        </tr>
      </tbody>
    </table>

    <!-- <div v-for="store in stores" :key="store.id">
      <router-link :to="`/store/${store.storeName}`">
        <h2>{{ store.storeName }}</h2>
      </router-link>
      <img :src="store.storeImage" alt="store image" />
      <p>{{ store.category }}</p>
    </div> -->
  </div>
</template>

<style scoped></style>
