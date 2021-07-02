<template>
<div>
  
    <div v-if="computedAudios.url" class="audio-container">
       <p>coucou audio {{ computedAudios.url }}</p>
       

            <audio
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

    console.log('audio qui monte yep')
  },

  methods: {}
}
</script>
