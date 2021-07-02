<template>
    <div>
      <div class="papillon-game">
          <CanvasGameComponent></CanvasGameComponent>
      </div>
    </div>
</template>

<script>
import CanvasGameComponent from "../components/GameCenterComponents/CanvasGameComponent.vue";
export default {
  components: {
    CanvasGameComponent,
  },
};
</script>

<style  scoped>
.papillon-game {
  margin: 0 auto;
}
</style>
