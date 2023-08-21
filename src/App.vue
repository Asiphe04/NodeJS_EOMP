<template>
   <NavbarComp></NavbarComp>
  <router-view/>
  <FooterComp></FooterComp>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue'
export default {
  components : {
   NavbarComp,
    FooterComp
  }
}
</script>

<style lang="scss">
::-webkit-scrollbar {
     display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //  height: 120vh;
   background-image: linear-gradient(to bottom, rgba(28, 21, 21, 1), rgba(59, 76, 136, 1));
  //  background-color: linear-gradient(rgba(28, 21, 21, 1), rgba(59, 76, 136, 1));

}

nav {
  padding: 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: white;
    }
  }
}


</style>
