<template>
  <div>
    
    <p>coucou bacgrkound</p>
  
      <div v-for="backGroundInfo in  this.computedBackgrounds" :key="backGroundInfo.id">

              <div  v-if="backGroundInfo.type === 'audio'">

                  <audio 
                      volume="0.05"
                      autoplay
                      controls
                      ref="audioBox"
                  >
                      <source id="audioBackgroundBalise" :src="'/assets/mp3/background/' + backGroundInfo.url"/>
                  </audio>

              </div>

      <div  v-if="backGroundInfo.type === 'video'">
          <video controls loop autoplay :src="'/assets/videos/background/'  + backGroundInfo.url "></video>
      </div>
                  
    </div>
  </div>

</template>

<script>
export default {

  name: "ComponentBackground",

    mounted() {
      console.log('backgrounds : ', this.computedBackgrounds)
    },

    computed: {
      computedBackgrounds() {
        return this.$store.getters.getBackground;
      },
      
     
    },

  };

</script>

<style lang="scss" scoped>
.background-video-container {
  position: fixed;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
</style>
