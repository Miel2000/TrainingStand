<template>
<div>
  
    <div v-if="computedAudios.url" class="audio-container">
       <p>coucou audio {{ computedAudios.url }}</p>
       

            <audio
               
                id="audioScene"
                autoplay
                controls 
                ref="audioScene" 
                >
                <source   :src="'/assets/mp3/' + computedAudios.url"/>
            
            </audio>


    </div>

</div>
</template>
<script>


export default {
  name: "ComponentAudio",

  components: {},

  
  computed: {
    computedAudios(){
      return this.$store.getters.getAudio;
    },
    computedPointPapillons(){
      return this.$store.getters.getPointPapillon;
    }
  },

  watch: {
  },


  mounted() {

    // const audioScene = document.getElementById("audioScene");
    // audioScene.volume = 0.3;
  

    console.log('audio qui monte yep')
  },

  methods: {}
}
</script>
