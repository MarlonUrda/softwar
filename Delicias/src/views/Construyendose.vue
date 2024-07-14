<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div class="wrapper">
    <h1>En Construccion!...</h1>

    <div class="text">
      <p>Esta parte del sistema aun no esta lista</p>
      <p>Espero que pronto logren terminarla...</p>
    </div>

    <button @click="goBack">Volver</button>
  </div>
</template>
