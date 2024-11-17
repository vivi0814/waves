<template>
  <LoadingScreen v-if="showLoading" />
  <Header />
  <RouterView />
  <Footer />
</template>

<script >
import { RouterLink, RouterView } from "vue-router";
import LoadingScreen from "./components/LoadingScreen.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    LoadingScreen,
    Header,
    Footer,
  },
  data() {
    return {
      showLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoading = false;
    }, 4500);
  },
};
</script>

<style lang="scss">
@use "./assets/scss/main.scss";

#app {
  font-family: "Afacad Flux", sans-serif;
  font-weight: 400;
}
</style>
