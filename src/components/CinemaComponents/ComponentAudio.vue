<template>
<div>
  
    <div v-if="computedAudios.url" class="audio-container">
       <p>coucou audio {{ computedAudios.url }}</p>
       

            <audio
                ref="audioScene"
                id="audioScene"
                autoplay
                controls 
                >
                <source :src="'/assets/mp3/' + computedAudios.url"/>
            
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
    }
  },
  data() {
    return {};
  },


  mounted() {
    if(this.computedAudios.id == "pp1"){
              this.$store.commit('setActualAudio', [])
      
    }
    // const audioScene = document.getElementById("audioScene");
    // audioScene.volume = 0.3;
  

    console.log('audio qui monte yep')
  },

  methods: {}
}
</script>
