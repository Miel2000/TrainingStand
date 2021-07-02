<template>
<div>
	<div class="ctas-container">
    <p> coucouc CTAS </p>
		<div>
        <button 
          :class="computedCtas.id"
          @click="ctaClick(computedCtas, $event)"
          :style="{ display: isDisplay }"
        >	    {{computedCtas.text}} </button>
		</div>

	</div>
	</div>
</template>

<script>
export default {
  name: "ComponentCallToAction",

  data() {
    return {
      isDisplay: "block",
    };
  },
  computed: {
    computedCtas() {
      return this.$store.getters.getCtas
    },

    computedCurrentTimeVideo() {
      return  this.$store.getters.getCurrentTimeVideo
    }
  },

  methods: {

    ctaClick(cta, event) {
      let target = event.currentTarget;
            console.log("CtaClick")

      switch (cta.type) {
        case "clickOnMana":
          this.bounceOnClick(target);

          this.playManaSound(cta.path);

          this.$store.commit("addMana", 12);

          this.checkManaAmount();

          break;
        case "dodge": {
      
          if(cta.id == "capsule_go_out") {
            this.$store.commit('setActualCallToActions', {})
            console.log("capsule go out clicked : ",event)

            console.log(this.computedCurrentTimeVideo)
            console.log("sortir capsule avant modif : ",this.$store.state.sortirCapsule)
            this.$store.commit('setOutCapsule', true);
            console.log("sortir capsule aprés modif : ",this.$store.state.sortirCapsule)
          }
        }
      }
    },

    bounceOnClick(target) {
      if (target) {
        target.classList.add("clickActive");

        setTimeout(() => {
          target.classList.remove("clickActive");
        }, 100);
      }
    },

    playManaSound(sound) {
      if (sound) {
        let audio = new Audio(sound);

        audio.play();
      }
    },

    checkManaAmount() {
      // quand le mana est suffisant
      if (this.$store.state.mana > 150) {
        // on rerend le player interactif :
        this.$store.commit("setPlayerInteractive", true);

        // on refait play de la vidéo qui avait été .pause() dans le ComponentVideo ( lors du remplissage de $store.state.actualCallToActions[] )
        // grâce à un event qui est écouté par un v-on sur l'instanciation du ComponentCallToAction dans la Scene.vue
        // (et dont le handler déclenchera un .play() sur la vidéo)
        this.$emit("playAfterCta", "weshhh");

        // et ici, pour l'instant, on vide totalement le $store.state.actualCallToActions
        // mais cette logique est amenée à se complexifier puisque potentiellement plusieurs cta pourraient apparaitre
        // et les règles de play/pause et de click sur les cta pourraient être différentes
        this.$store.commit("resetCallToActions");
      }
    },
  },

  beforeUpdate() {},

  mounted() {
    console.log("dans le cta mounted :", this.computedCtas);
  },
};
</script>


<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->
<!-- ° ° ° ° ° ° ° ° ° S T Y L E ° ° ° ° ° ° ° ° ° -->

<style scoped lang="scss">
.ctas-container {
  --animDurationSlow: 1s;
  --animDurationQuick: 0.3s;

  height: 100%;
  width: 0%;

  transition: width 2s;

  > * {
    position: relative;
    bottom: 0;
    opacity: 1;
    transform: scale(1);

    transition: opacity var(--animDurationQuick),
      bottom var(--animDurationQuick), transform var(--animDurationQuick);

    &.clickActive {
      transform: scale(1.9);
      bottom: 45px;
      opacity: 0.5;
    }
  }

  img,
  .potion_mana {
    width: 0%;
    transition: width --animDurationSlow;
  }

  &.active {
    width: 250px;

    img {
      width: 100%;
    }

    .potion_mana {
      width: 100%;
    }
  }
}
</style>
