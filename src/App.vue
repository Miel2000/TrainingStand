<template>

  <div id="app" :data-route="routeName">

    <div id="nav">

      <router-link :to="{ name: 'home' }">Home</router-link>

      <router-link :to="{ name: 'standentraiment' }">Stand d'entrainement</router-link>

 
    </div>

    <transition
      appear
      name="transitionRouter"
      mode="out-in"
    >
      <router-view />

    </transition>

  </div>

</template>


<script>


export default {


  data: function() {
  
  },

  watch: {
    $route(to) {
      this.routeName = to.name;
    },
  },

  mounted() {
    //
  },

  beforeDestroy() {
    //
  },
};
</script>

<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style lang="scss">
@import "./styles/_appBase.scss";
@import "./styles/_appColors.scss";
@import "./styles/_appLayout.scss";
@import "./styles/_appNav.scss";

// body {
//   // background-color: black;
// }

#nav {
  color: grey;
}
</style>
