<template>
  <div class="container">
        <div class="hub-scene">
 
              <ComponentHub  /> 

    </div>
  <div class="computed-scene">

    <p> Computed Videos Infos : {{ Math.round(computedCurrentTimeVideo)  }} </p>
    <p> Computed Videos Infos : {{ computedVideoInfos  }} </p>
    <p> Computed Weapon : {{        computedWeapon  }} </p>
    <p> Computed Backgrounds : {{   computedBackgrounds  }} </p>
    <p> Computed Enemys : {{        computedEnemys  }} </p>
    <p> Computed Audios : {{        computedAudios  }} </p>
    <p> Computed Choices : {{       computedChoices  }} </p>
    <p> Computed Ctas : {{          computedCtas  }}  </p>
    <p> Computed Ninja Life : {{    computedNinjaLife  }} </p>
    <p> Computed Ma Life : {{       computedMyLife  }} </p>
    
  </div>


                            <!-- VIDEO 
                               Component -->
    <div class="video-scene">
        <div  v-if="computedVideoInfos.self" >
            <p>coucou video</p>
              <div>

                <ComponentVideo />

              </div>
        </div>
    </div>

                             <!-- CHOICE 
                                 Component -->
    <div class="choice-scene"  >
      <div v-if="computedChoices">
          <div>

            <ComponentOneChoice />

          </div>
      </div>
    </div> 

                              <!-- ENEMY 
                                 Component -->
      <div class="enemy-scene">
          <div v-if="computedEnemys">
    
            <ComponentEnemy />

          </div>
      </div>
        
                              <!-- CALL TO ACTIONS 
                                     Component  -->
    <div class="cta-scene">
      
      <div v-if="computedCtas.id" >

            <ComponentCallToAction   />

      </div>

    </div>

                                        
                                    <!-- BACKGROUND
                                         Component -->
  <div class="background-scene">
        <div v-if="computedVideoInfos" >
            <div v-if="computedVideoInfos.isBackground" >

              <ComponentBackground />

          </div>
      </div>
    </div>

                                      <!--  AUDIO
                                          Componenent  -->
    <div class="audio-scene">
      <div v-if="computedAudios.url" >
          <div>

              <ComponentAudio  /> 

          </div>
      </div>
    </div>



  </div>
</template>


<script>

import ComponentVideo from "@/components/CinemaComponents/ComponentVideo";
import ComponentAudio from "@/components/CinemaComponents/ComponentAudio";
import ComponentBackground from "@/components/CinemaComponents/ComponentBackground";
import ComponentHub from "@/components/CinemaComponents/ComponentHub";
import ComponentCallToAction from "@/components/CinemaComponents/ComponentCallToAction";
import ComponentEnemy from "@/components/CinemaComponents/ComponentEnemy";
import ComponentOneChoice from "@/components/CinemaComponents/ComponentOneChoice";


export default {
  components: {
    ComponentVideo,
    ComponentCallToAction,
    ComponentOneChoice,
    ComponentAudio,
    ComponentEnemy,
    ComponentBackground,
    ComponentHub
  },

  computed: {
    computedStoryMap() {
      return this.$store.getters.getStoryMap;
    },

    computedCurrentTimeVideo(){
      return this.$store.getters.getCurrentTimeVideo;
    },

    computedVideoInfos() {
      return this.$store.getters.getVideo;
    },

    computedChoices() {
      return this.$store.getters.getChoices;
    },

    computedAudios() {
      return  this.$store.getters.getAudio;
    },

    computedEnemys() {
       return this.$store.getters.getEnemy;
    },

    computedCtas() {
      return this.$store.getters.getCtas;
    },

    computedBackgrounds() {
      return this.$store.getters.getBackground;
    },

    computedWeapon() {
      return this.$store.getters.getWeapon;
    },

    computedNinjaLife() {
      return this.$store.getters.getNinjaLife;
    },

    computedMyLife() {
      return this.$store.getters.getMyLife;
    },

    computedTimerShootingRemake() {
      return this.$store.getters.getTimerShootingRemake;
    }
  },

  mounted() {
    console.log('enemysss Component', this.computedEnemys)
  },

  destroyed() {
    // stock la route au moment du die du cinema
    this.$store.state.routeHandler = this.computedVideoInfos;
  },

  methods: {},
};
</script>

<style lang="scss">
.choice-scene {
  display: flex;
  justify-content: space-evenly;
  bottom: 20px;
}

.video-scene {
  z-index: -1;
}

.enemy-scene {
  width: 200px;
  margin: 0 auto;
}

.background-scene {
  z-index: -1;
  position: absolute;

  bottom: 0%;
  left: 0;
}

.computed-scene {
  position: absolute;
  width: 300px;
  top: 0;
  left:0;
}

.computed-scene p {
    font-size: 0.69em;
}

.cta-scene {
  display: flex;
  justify-content: space-evenly;
  bottom: 20px;
}
</style>
