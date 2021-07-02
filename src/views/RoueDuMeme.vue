<template>
  <div class="hello">
    <!-- ROUE DU MEME AU CLICK -->

    <div class="rdm-click">
      <img
          ref="poring" 
          class="poring" 
          src="/assets/rdm/img/poring.png" 
          :randomHandler="alreadyStoredNumber" 
          @click="getRandomMeme" 
          v-on:click="animateAsset" />

    </div>

    <br />
    <div v-if="randomMeme">
      <div class="image-container">
        <img :src="randomMeme.image" alt="" />
      </div>
      <div class="audio-container">
        <audio
          id="monAudio"
          ref="monAudio"
          :src="randomMeme.audio"
          volume="0.2"
          autoplay
          controls
        ></audio>
      </div>
    </div>
    <div v-else>
      <div class="random-container">
        <p>Randomization</p>
        <img :src="randomMeme.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { memes } from "@/rdmData.js";
import { TimelineLite } from "gsap";

export default {
  name: "RoueDuMeme",

  data() {
    return {
      memes,
      actualNumber: 0,
      alreadyStoredNumber: [],
      monAudio: "",
    };
  },

  mounted() {
    console.log("bien mounted");
    this.timeline = new TimelineLite();
    console.log("ma tl : ", this.timeline);
    this.poring = this.$refs.poring;
  },

  computed: {
    randomMeme() {
      return this.getRandomMeme();
    },
  },

  methods: {
    getRandomMeme() {
      let randomNumber = Math.floor(Math.random() * memes.length);
      this.actualNumber = randomNumber;

      this.alreadyStoredNumber.push(randomNumber);

      return memes[randomNumber];
    },
    animateAsset() {
      let randomNumber = Math.floor(Math.random() * 50);

      console.log("anim triggered", this.$refs.poring);

      this.timeline.to(this.poring, 0.2, {
        ease: "s",
        y: "-" + randomNumber,
      });
      this.timeline.to(this.poring, 0.2, {
        ease: "s",
        y: 0,
        x: 0,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin: 0 auto;
  width: 200px;
}
</style>
