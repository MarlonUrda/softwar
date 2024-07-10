<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body>
    <div class="bgleft">
      <img src="../assets/Images/FiguraIzq.png" />
    </div>
    <div class="bgupleft">
      <img src="../assets/Images/FiguraIzq.png" />
    </div>
    <div class="bgright">
      <img src="../assets/Images/RightBG.png" />
    </div>
    <div class="bgrightup">
      <img src="../assets/Images/FiguraDerArr.png" />
    </div>
    <div class="bgleftup">
      <img src="../assets/Images/FiguraIzqArr.png" />
    </div>
    <div class="bgleftdown">
      <img src="../assets/Images/FiguraIzqAbj.png" />
    </div>
    <div class="logo">
      <img src="../assets/Images/Mall Delicias.png" />
    </div>
    <div class="logo2">
      <img src="../assets/Images/Logo Bubbles.png" />
    </div>
    <div class="apple">
      <img src="../assets/Images/App Store.png" />
    </div>
    <div class="googleplay">
      <img src="../assets/Images/Google Play.png" />
    </div>
    <div class="social">
      <img src="../assets/Images/FooterIcons.png" />
    </div>

    <div class="btns-wrapper">
      <RouterLink to="/shops">
        <button>Ver Tiendas</button>
      </RouterLink>
      <RouterLink to="/Construccion">
        <button>Ver Guia</button>
      </RouterLink>
    </div>

    <div class="container">
      <div class="bubbles">
        <span style="--i: 29"></span>
        <span style="--i: 32"></span>
        <span style="--i: 23"></span>
        <span style="--i: 12"></span>
        <span style="--i: 34"></span>
        <span style="--i: 16"></span>
        <span style="--i: 38"></span>
        <span style="--i: 42"></span>
        <span style="--i: 9"></span>
        <span style="--i: 17"></span>
        <span style="--i: 24"></span>
        <span style="--i: 31"></span>
        <span style="--i: 41"></span>
        <span style="--i: 48"></span>
        <span style="--i: 10"></span>
        <span style="--i: 17"></span>
        <span style="--i: 20"></span>
        <span style="--i: 30"></span>
        <span style="--i: 39"></span>
        <span style="--i: 70"></span>
        <span style="--i: 5"></span>
        <span style="--i: 16"></span>
        <span style="--i: 24"></span>
        <span style="--i: 9"></span>
        <span style="--i: 18"></span>
        <span style="--i: 35"></span>
        <span style="--i: 28"></span>
        <span style="--i: 14"></span>
        <span style="--i: 40"></span>
        <span style="--i: 32"></span>
        <span style="--i: 28"></span>
        <span style="--i: 24"></span>
        <span style="--i: 15"></span>
        <span style="--i: 50"></span>
        <span style="--i: 62"></span>
        <span style="--i: 25"></span>
        <span style="--i: 34"></span>
        <span style="--i: 72"></span>
        <span style="--i: 80"></span>
        <span style="--i: 15"></span>
        <span style="--i: 26"></span>
        <span style="--i: 34"></span>
      </div>
    </div>

    <section>
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
    </section>

    <footer>
      <div class="footer-content">
        <p>© 2024 Mall Delicias Plaza. Todos los derechos reservados</p>
      </div>
    </footer>
  </body>
</template>

<style scoped src="../../style.css"></style>
