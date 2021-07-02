<template>
  <div>
    <div>

      <video
        :class=" { video_box : 'video_box' }"
        :src="'/assets/videos/' + computedVideo.self.url"
        controls 
        autoplay
        playsinline
        @timeupdate="onTimeUpdate"
      
      >
      </video>

    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {

      alreadySent: []
      
    }
  },

  computed: {

    computedCurrentTimeVideo(){
      return this.$store.getters.getCurrentTimeVideo;
    },

    computedVideo(){
      return this.$store.getters.getVideo;
    },

    computedChoices() {
      return this.$store.getters.getChoices;
    },

    computedStoryMap() {
      return this.$store.getters.getStoryMap;
    },

    computedMyLife() {
      return this.$store.getters.getMyLife;
    }
  },

  mounted() {
    this.alreadySent = [];
  },

  methods: {
    onTimeUpdate(event) {
      this.$store.commit('setCurrentTimeVideo', event.target.currentTime);
      // console.log(this.computedCurrentTimeVideo);
      // Si y'a des ctas
      // compare les timecodes des ctas

 

      // compare les timecodes issuent du computedVideo

      // timedChoice
      if (this.computedVideo.timedChoices) {
        this.computedVideo.timedChoices.forEach((timedChoice) => {
          this.compareForTimedChoices(this.computedCurrentTimeVideo, timedChoice);
        });
      }

      // timedAudios
      if(this.computedVideo.timedAudios) {
        this.computedVideo.timedAudios.forEach((timedAudio) => {
          this.compareForAudios(this.computedCurrentTimeVideo, timedAudio)
        })
      }

      // timedImposedRoots
      if(this.computedVideo.timedImposedRoots) {
        this.computedVideo.timedImposedRoots.forEach((timedImposedRoot) => {
          this.compareForImposedRoot(this.computedCurrentTimeVideo, timedImposedRoot)
        })
      }

      // timedCtas
     if(this.computedVideo.timedCtas ){

        this.computedVideo.timedCtas.forEach((timedCta) => {
          this.compareForTimedCtas(this.computedCurrentTimeVideo, timedCta)

          switch (timedCta.id) {
            case "capsule_go_out":
                if( event.target.currentTime >= timedCta.to   &&  this.$store.state.sortirCapsule == false ) 
                {
                   // const die = new Audio("./assets/mp3/hits/piege_fleche.mp3");
                  // die.play();

                  console.log(this.$store.state.sortirCapsule, " : sortir capsule");
                  console.log("death scene : ", timedCta.attributes.deathScene );
                  this.$store.commit('setActualCallToActions',  {} )
                  this.$store.commit('setActualAudio',  {} )
                  this.alreadySent = [];
                  this.$store.commit('setActualVideo',  this.computedStoryMap.videos['death_gatling'] )

                  // event.target.currentTime = 0;
                }
              break;
          
            default:
              break;
          }
  
        })
      }
    },
    
    compareForTimedChoices(actualVideoTimeCode ,oneTimedChoice) {

      if (oneTimedChoice) {

        if(actualVideoTimeCode >=  oneTimedChoice.at && this.alreadySent.indexOf(oneTimedChoice.id) === -1)
        {
          this.alreadySent.push(oneTimedChoice.id);
          this.$store.commit('addActualChoices', oneTimedChoice);
          if(oneTimedChoice.id === "fusil" || oneTimedChoice.id === "banane" || oneTimedChoice.id === "couteau" ) {
            this.$store.commit('setActualAudio', {});
          }
        }
      }
    },
    
    
    compareForTimedCtas(actualVideoTimeCode ,oneTimedCtas) {

      if (oneTimedCtas) {

        if(actualVideoTimeCode >=  oneTimedCtas.at && this.alreadySent.indexOf(oneTimedCtas.id) === -1)
        {
          this.alreadySent.push(oneTimedCtas.id);
          this.$store.commit('setActualCallToActions', oneTimedCtas);

        }
        if(actualVideoTimeCode >=  oneTimedCtas.to &&  this.alreadySent.indexOf(oneTimedCtas.id) !== -1 ){
          console.log("stop Ctas .to :", oneTimedCtas.id);
          this.$store.commit('setActualCallToActions', {});
          // this.alreadySent.splice(oneTimedCtas,1)

        }
      }
    },

    compareForImposedRoot(actualVideoTimeCode, oneImposedRoot){
        this.alreadySent = [];

      if(oneImposedRoot.type == "imposed") {
           if (actualVideoTimeCode >= oneImposedRoot.at && this.alreadySent.indexOf(oneImposedRoot.id) === -1) 
           {
            // Route imposée = this.computedStoryMap.videos[oneImposedRoot.route] 
            this.$store.commit("setActualVideo", this.computedStoryMap.videos[oneImposedRoot.route]);
            console.log('ici on envoi la route imposed normalement', this.computedStoryMap.videos[oneImposedRoot.route])
              // Selon la route, on affect le store
              if(oneImposedRoot.route == "shooting" ){

                this.$store.commit('setActualEnemy',      this.computedStoryMap.videos[oneImposedRoot.route].enemy );
                this.$store.commit('setActualBackground', this.computedStoryMap.videos[oneImposedRoot.route].backgrounds );
              }

              if(oneImposedRoot.id == "cyberpunk_imposed") {
                console.log('IMPOSED ROOT CYBERPUNK : ', oneImposedRoot.route )
                this.$store.commit("setActualVideo", this.computedStoryMap.videos[oneImposedRoot.route]);
                // this.$store.commit('setActualCallToActions', this.computedStoryMap.videos[oneImposedRoot.route].timedCtas);

                this.$store.commit('setActualAudio', {} );

                console.log(this.$store.state.actualVideo)

              }
          } 

      }

    },

    compareForAudios(actualVideoTimeCode, oneAudio){
      if(oneAudio.type) {
        if (actualVideoTimeCode >= oneAudio.at && this.alreadySent.indexOf(oneAudio.id) === -1) 
        {
          this.alreadySent.push(oneAudio.id);
          this.$store.commit("setActualAudio", oneAudio);
        } 

      }
    },


  },
};

</script>


<style scoped lang="scss">
  .video_box {
    width: 700px;
  }
  .video-player {
    // de base, le player n'est pas interactif
    pointer-events: none;
    // border: solid 15px red;

    // transition: border 0.7s, width 0.7s;

    // &.cohabitationCta {
    //   width: 80%;
    //   margin-right: 50px;
    // }

    // &.isInteractive {
    //   pointer-events: initial;
    //   // border: solid 15px green;
    // }
  }
</style>
