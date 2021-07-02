<template>
    <div>
        <div :id="containerId" v-if="downloaded" />
        <div class="placeholder" v-else>
            Downloaaaad... !
        </div>
      <img  v-if="downloaded && imgTrigger" :src="'/assets/gamecenter/img/soleil.png'"/>
    </div>
</template>

<script>
export default {
  name: "CanvasGameComponent",
  data() {
    return {
      downloaded: false,
      gameInstance: null,
      imgTrigger: false,
      containerId: "game-container",
    };
  },

  async mounted() {
    const game = await import("@/components/GameCenterComponents/config/game");
    this.downloaded = true;

    this.$nextTick(() => {
      this.gameInstance = game.launch(this.containerId);
      // console.log(this.gameInstance.scene.game.keys, " Game Instance");
      // this.gameInstance.scene.start("BootScene");
    });
    console.log(window);
  },

  updated() {},

  destroyed() {
    this.gameInstance.destroy(false);
  },
};
</script>

<style lang="scss" scoped>
img {
  position: absolute;
  top: 5vh;
  right: 5vh;
}
</style>
