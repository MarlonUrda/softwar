<template>
  <div>
    <div>
      <button
        v-for="category in uniqueCategories"
        :key="category"
        @click="selectedCategory = category"
        :id="`btn-${category}`"
      >
        <a :href="`#${category}`">
          {{ category }}
        </a>
      </button>
    </div>

    <div v-for="category in uniqueCategories" :key="category">
      <h1 :id="category">{{ category }}</h1>

      <div v-for="store in filteredStores[category]" :key="store.id">
        <img :src="store.storeImage" :alt="store.storeName" />
        <router-link :to="`/store/${store.storeName}`">
          <h2>{{ store.storeName }}</h2>
        </router-link>
        <p>{{ store.description }}</p>

        <div class="visita">
          <button>Visitar</button>
          <span><img src="./logoImages/ping.png" alt="" /></span>
        </div>
        <p>Piso {{ store.floor }}. Local {{ store.local }}</p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import stores from '../../data.js'
import Footer from './Footer.vue'

const selectedCategory = ref('')

const uniqueCategories = computed(() => {
  const categories = stores.map((store) => store.category)
  return [...new Set(categories)]
})

const filteredStores = computed(() => {
  const storesByCategory = {}
  uniqueCategories.value.forEach((category) => {
    storesByCategory[category] = stores.filter((store) => store.category === category)
  })
  return storesByCategory
})
</script>

<style scoped></style>
