<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import stores from '../../data'
import Footer from './Footer.vue'

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

    <div v-if="storeInfo.discountProducts || storeInfo.promos">
      <div class="btn-wrapper">
        <button>
          <a href="#promo-discounts"> Promociones y Descuentos </a>
        </button>
        <button>
          <a href="#catalogo"> Catalogo </a>
        </button>
      </div>

      <div id="promo-discounts">
        <h1>Promociones y Descuentos</h1>
        <div v-for="discount in storeInfo.discountProducts" :key="discount">
          <h2>{{ discount.productName }}</h2>
          <p>
            {{ discount.description }} que tenia un costo de ${{ discount.price }} ahora tiene un
            asombroso {{ discount.discount }}% de descuento.
          </p>
          <p>Ahora te cuesta tan solo {{ discount.realPrice }}.</p>
          <p>Quedan: {{ discount.stock }} unidades.</p>
        </div>

        <div v-for="promo in storeInfo.promos" :key="promo">
          <h2>{{ promo.promoName }}</h2>
          <p>{{ promo.descriptionPromo }}</p>
          <p v-if="promo.price">Precio: ${{ promo.price }}.</p>
        </div>
      </div>

      <div id="catalogo">
        <h1>Catalogo</h1>
        <div v-for="product in storeInfo.products" :key="product.productId">
          <img :src="product.productImage" />
          <h2>{{ product.productName }}</h2>
          <p>{{ product.description }}.</p>
          <p>Precio: ${{ product.price }}.</p>
          <p>Quedan: {{ product.stock }} unidades.</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="btn-wrapper">
        <button>
          <a href="#promo-discounts"> Promociones y Descuentos </a>
        </button>
        <button>
          <a href="#catalogo"> Catalogo </a>
        </button>
      </div>

      <div id="promo-discounts-empty">
        <h1>Promociones y Descuentos</h1>
        <p>No hay promociones disponibles en esta tienda.</p>
      </div>
      <div id="catalogo">
        <h1>Catalogo</h1>
        <div v-for="product in storeInfo.products" :key="product.productId">
          <img :src="product.productImage" />
          <h2>{{ product.productName }}</h2>
          <p>{{ product.description }}.</p>
          <p>Precio: ${{ product.price }}.</p>
          <p>Quedan: {{ product.stock }} unidades.</p>
        </div>
      </div>
    </div>

    <div class="btn-wrapper-2">
      <router-link to="/shops">
        <button>Volver a lista de tiendas</button>
      </router-link>
      <router-link to="/construccion">
        <button>Llevame!</button>
      </router-link>
    </div>
    <Footer />
  </div>

  <div v-else>
    <h1>Tienda no encontrada: {{ storeName }}</h1>
    <Footer />
  </div>
</template>

<style scoped></style>
