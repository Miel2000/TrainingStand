<template>
  <div class="hello">
    <!-- ROUE DU MEME AU CLICK -->

    <div class="rdm-click">
      <img
          ref="poring" 
          class="poring" 
          src="/assets/rdm/img/poring.png" 

          @click="getRandomMeme" 
          />

    </div>

    <br />
    <div v-if="computedMemeData">
      
      <div  @click="getRandomMeme"  class="image-container">
        <img :src="this.memeActualySeen.image" alt="" />
      </div>


      <div class="audio-container">
        <audio
          id="audioMeme"
          ref="audioMeme"
          :src="this.memeActualySeen.audio"
          volume="0.2"
          autoplay
         
        ></audio>
      </div>
    </div>
<div class="revolution-cards">

    <div v-if="this.revolutionCards.length > 0">
      <div v-for=" card in this.revolutionCards" :key="card.id">
        <p>eh</p>
          <img :src=card.image alt="">
      </div>

    </div>
 
</div>
  </div>
</template>

<script>



export default {
  name: "RoueDuMeme",

  data() {
    return {
      actualNumber : 0,
      memeActualySeen: {},
      memeContainer: [],
      revolutionCards: []
    };
  },

  mounted() {
  
    console.log(this.computedMemeData.memes)
    const audioBalise = document.getElementById("audioMeme");
    audioBalise.volume = 0.3;
  
  },

  computed: {
    computedMemeData(){
      return this.$store.getters.getMemeData;
    }
  },



  methods: {
    getRandomMeme() {

    const randomId = this.getRandomInt(11)

    const listNumerable = Object.values(this.computedMemeData.memes);

    const  res = listNumerable.find(e => e.id == randomId)

    this.memeActualySeen = res

    if(this.memeActualySeen.name == "hugerevolution") {
      this.revolutionCards.push(this.memeActualySeen);
      console.log('C LA REVOLUZION')
    }

    console.log( this.memeActualySeen )

    },

    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

  
  },
};
</script>


<style scoped>

img {
  margin: 0 auto;
  width: 200px;
}

.revolution-cards {
  display:flex;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
