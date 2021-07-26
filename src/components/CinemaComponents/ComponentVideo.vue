<template>
  <div>

    <div>
      <video
        :class=" { video_box : 'video_box' }"
        :src="'/assets/videos/' + computedVideo.self.url"
        controls 
        autoplay
        playsinline
        @timeupdate="onVideoTimeUpdate"
        />
    </div>

    <div v-if="computedVideo.type =='generique'">
        <audio
            controls
            autoplay
            playsinline
            :src="'/assets/mp3/generique/' + computedVideo.audioUrl" 
            @timeupdate="onAudioTimeUpdate"
        />
    </div>

  </div>
</template>

<script>
export default {

  data(){
    return {
      choicesAlreadySent: [],
      ctasAlreadySent: [],
      imposedRootAlreadySent: [],
      audiosAlreadySent: [],
      timedStoresAlreadySent:  [],
      timedGeneriqueAudioAlreadySent: [],
    }
  },

  computed: {

    computedCurrentTimeVideo(){
      return this.$store.getters.getCurrentTimeVideo;
    },

    computedVideo(){
      return this.$store.getters.getVideo;
    },

    computedAudio(){
      return this.$store.getters.getAudio;
    },
    computedWeapon(){
      return this.$store.getters.getWeapon;
    },

    computedChoices() {
      return this.$store.getters.getChoices;
    },

    computedStoryMap() {
      return this.$store.getters.getStoryMap;
    },

    computedMyLife() {
      return this.$store.getters.getMyLife;
    },

    computedPointPapillon() {
      return this.$store.getters.getPointPapillon;
    }
  },

  mounted() {
    
    this.choicesAlreadySent     =  []
    this.ctasAlreadySent        =  []
    this.imposedRootAlreadySent =  []
    this.audiosAlreadySent      =  []
    this.timedStoresAlreadySent =  []
  },

  methods: {

    
    onAudioTimeUpdate(event) {
      console.log(event.target.currentTime);
      this.$store.commit('setCurrentTimeAudio', event.target.currentTime);

      if(this.computedVideo.mainTimedAudios){
        this.computedVideo.mainTimedAudios.forEach((oneTimedGeneriqueAudio) => {
            if(oneTimedGeneriqueAudio.at < event.target.currentTime  && this.timedGeneriqueAudioAlreadySent.indexOf(oneTimedGeneriqueAudio.id) === -1) {

              this.timedGeneriqueAudioAlreadySent.push(oneTimedGeneriqueAudio.id)
              this.$store.commit('setActualAudio', oneTimedGeneriqueAudio )
              
              console.log(oneTimedGeneriqueAudio.id, "<- timed audio id ")

              if(oneTimedGeneriqueAudio.id == "papillon"  ) {
                  this.$store.commit('setActualAudio', oneTimedGeneriqueAudio.id['pp1'] )

              }
            
             
            }
        })
      }
    },

    onVideoTimeUpdate(event) {
      this.$store.commit('setCurrentTimeVideo', event.target.currentTime);

      //   /!\ COMPARING FROM TIMELINE VIDEO /!\ 
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

  
        })
      }  
      // timedStore
     if(this.computedVideo.timedStores ){
        this.computedVideo.timedStores.forEach((timedStore) => {
          this.compareForTimedStore(this.computedCurrentTimeVideo, timedStore)

  
        })
      }  
    },

 
    // METHODES 
    muteAudioWhenWeaponAppair(oneTimedChoiceId){
         if((oneTimedChoiceId === "fusil" || oneTimedChoiceId === "banane" || oneTimedChoiceId === "couteau") && this.computedVideo.id == "hokage" ) {
            console.log("condition si scene ho")
            this.$store.commit('setActualAudio', {});
      }
    },

    
    compareForTrapCapsule(actualVideoTimeCode, currentVideo) {

  
      switch (currentVideo.id) {
        
        case "cyberpunk_fusil":
                this.$store.commit('setActualCallToActions', {})
                this.$store.commit('setActualAudio', {})
                console.log('TRAPS ACTIVED' )
                console.log('TRAPS currentVideo', currentVideo )
                console.log('actualVideoTimeCode', actualVideoTimeCode )
                this.$store.commit('setActualVideo',  this.computedStoryMap.videos['death_gatling'])

          break;
        case "cyberpunk_banane":
                this.$store.commit('setActualCallToActions', {})
                this.$store.commit('setActualAudio', {})
                

                console.log('TRAPS ACTIVED' )
                console.log('TRAPS currentVideo', currentVideo )
                console.log('actualVideoTimeCode', actualVideoTimeCode )
                this.$store.commit('setActualVideo',  this.computedStoryMap.videos['death_gatling'])

          break;
        case "cyberpunk_couteau":
                this.$store.commit('setActualCallToActions', {})
                this.$store.commit('setActualAudio', {})
                
                console.log('TRAPS ACTIVED' )
                console.log('TRAPS currentVideo', currentVideo )
                console.log('actualVideoTimeCode', actualVideoTimeCode )
                this.$store.commit('setActualVideo',  this.computedStoryMap.videos['death_gatling'])

          break;
      
        default:
          break;
      }
    
    },

    trappingCapsule(currentVideoTimeCode, oneTimedCtasId){
            if(currentVideoTimeCode < 25   &&  ( this.$store.state.actualVideo.id  == "cyberpunk_fusil" || 
                                              this.$store.state.actualVideo.id  == "cyberpunk_couteau" || 
                                              this.$store.state.actualVideo.id  == "cyberpunk_banane"  )){
              console.log(" ctas Actual Video  :", this.$store.state.actualVideo.id )
              console.log(" ctas Actual Time Code :", currentVideoTimeCode)
              console.log(" ctas RUN TIME oneTimedCtas :", oneTimedCtasId)
            if(this.$store.state.sortirCapsule == false ){
                     this.ctasAlreadySent = [];

              return  this.compareForTrapCapsule( currentVideoTimeCode ,this.$store.state.actualVideo  )
            }

         
          }
     
    },


    compareForTimedChoices(actualVideoTimeCode ,oneTimedChoice) {

      if (oneTimedChoice) {

        if(actualVideoTimeCode >=  oneTimedChoice.at && this.choicesAlreadySent.indexOf(oneTimedChoice.id) === -1)
        {
          this.choicesAlreadySent.push(oneTimedChoice.id);
          this.$store.commit('addActualChoices', oneTimedChoice);
          
          this.muteAudioWhenWeaponAppair(oneTimedChoice.id);
     
        } 

        

        if(actualVideoTimeCode >=  oneTimedChoice.to &&  this.choicesAlreadySent.indexOf(oneTimedChoice.id) !== -1 ){
            
          console.log("stop Choice .to :", oneTimedChoice.id);
          this.$store.commit('setActualChoices', []);
          
          this.choicesAlreadySent = [];
       

        }

      }
    },

    
    compareForTimedCtas(actualVideoTimeCode ,oneTimedCtas) {

      if (oneTimedCtas) {

        if(actualVideoTimeCode >=  oneTimedCtas.at && this.ctasAlreadySent.indexOf(oneTimedCtas.id) === -1)
        {
          this.ctasAlreadySent.push(oneTimedCtas.id);
          this.$store.commit('setActualCallToActions', oneTimedCtas);

        }

        if(actualVideoTimeCode >=  oneTimedCtas.to &&  this.ctasAlreadySent.indexOf(oneTimedCtas.id) !== -1 ){
          
          // trash condition pour éviter chevauchement du timeCode valorant_arme et cyberpunk_arme (evite la redirection auto deathScene gatling )
            this.trappingCapsule(actualVideoTimeCode, oneTimedCtas.id)
      
        }
      }
    },
    
    compareForTimedStore(actualVideoTimeCode , oneTimedStore) {

      if (oneTimedStore) {

        if(actualVideoTimeCode >=  oneTimedStore.at && this.timedStoresAlreadySent.indexOf(oneTimedStore.id) === -1)
        {
          this.timedStoresAlreadySent.push(oneTimedStore.id);
          this.$store.commit('setPdf', oneTimedStore.quantity);
        }

        if(actualVideoTimeCode >=  oneTimedStore.at &&  this.timedStoresAlreadySent.indexOf(oneTimedStore.id) !== -1 ){
          
          console.log(this.timedStoresAlreadySent, "donc nop")
          // trash condition pour éviter chevauchement du timeCode valorant_arme et cyberpunk_arme (evite la redirection auto deathScene gatling )
            // this.trappingCapsule(actualVideoTimeCode, oneTimedCtas.id)
      
        }
      }
    },

   selectSceneAccordingToChevreWeapon(scene, weapon){
      console.log(scene, weapon)
      // imposed paradi
      if( scene == "paradi" && weapon == "banane"){
        return this.$store.commit('setActualVideo', this.computedStoryMap.videos['paradi_banane'])
      }
      if(scene == "paradi" && weapon == "couteau"){
        console.log('couteauuUUuuuUUuuU')
        return this.$store.commit('setActualVideo', this.computedStoryMap.videos['paradi_couteau'])
      }
      if(scene == "paradi" && weapon == "fusil"){
        return this.$store.commit('setActualVideo', this.computedStoryMap.videos['paradi_fusil'])
      }
      // imposed diablo
      if( scene == "diablo" && weapon == "banane"){
        return this.$store.commit('setActualVideo', this.computedStoryMap.videos['diablo_banane'])
      }
      if( scene == "diablo" && weapon == "couteau"){
        return this.$store.commit('setActualVideo', this.computedStoryMap.videos['diablo_couteau'])
      }
      if( scene == "diablo" && weapon == "fusil"){
        return this.$store.commit('setActualVideo', this.computedStoryMap.videos['diablo_fusil'])
      }
    
    },

    compareForImposedRoot(actualVideoTimeCode, oneImposedRoot){
    

      if(oneImposedRoot.type == "imposed") {
        if (actualVideoTimeCode >= oneImposedRoot.at && this.imposedRootAlreadySent.indexOf(oneImposedRoot.id) === -1) 
           {
           
     
            // Route imposée = this.computedStoryMap.videos[oneImposedRoot.route] 
            // console.log('ici on envoi la route imposed normalement', this.computedVideo.videos[[oneImposedRoot].route])


              // Selon la route, on affect le store
              if(oneImposedRoot.route == "shooting" ){

                this.$store.commit('setActualEnemy',      this.computedStoryMap.videos[oneImposedRoot.route].enemy );
                this.$store.commit('setActualBackground', this.computedStoryMap.videos[oneImposedRoot.route].backgrounds );
                this.$store.commit("setActualVideo", this.computedStoryMap.videos[oneImposedRoot.route]);

              }


              if(oneImposedRoot.route == "paradi"){
                  console.log('ON EST BIEDN DA NSLE REDIRECT VERS PARADI')
                  this.choicesAlreadySent     =  []
                  this.imposedRootAlreadySent =  []
                  this.audiosAlreadySent      =  []
                  this.$store.commit('setActualChoices', [])
                  this.$store.commit('setActualAudio',{})
                 
                  return this.selectSceneAccordingToChevreWeapon('paradi', this.computedWeapon)
              }

              
              if(oneImposedRoot.route == "diablo" ) {         
                return this.selectSceneAccordingToChevreWeapon('diablo', this.computedWeapon)
                 
              }

              if(oneImposedRoot.id == "cyberpunk_imposed" ||
                 oneImposedRoot.id == "valorant_b_to_cyberpunk_banane" ||
                 oneImposedRoot.id == "valorant_c_to_cyberpunk_couteau" || 
                 oneImposedRoot.id == "valorant_f_to_cyberpunk_fusil") {
            
                   this.choicesAlreadySent     =  []
                   this.imposedRootAlreadySent =  []
                   this.audiosAlreadySent      =  []
                   this.$store.commit('setActualChoices',  [] )
                   this.$store.commit('setActualAudio', {} );
                   this.$store.commit('setActualCallToActions',{})
                   
                  if( this.computedWeapon == "banane"){
                    this.ctasAlreadySent        =  []
                    console.log('ok banane redirige bien vers' )
                    this.$store.commit('setActualCallToActions', this.computedStoryMap.videos['cyberpunk_banane'].timedCtas)
                    this.$store.commit('setActualVideo', this.computedStoryMap.videos['cyberpunk_banane'])
                  }

                  if(this.computedWeapon == "couteau"){
                      console.log('couteauuUUuuuUUuuU')
                      this.$store.commit('setActualVideo', this.computedStoryMap.videos['cyberpunk_couteau'])
                  }
                  if( this.computedWeapon == "fusil"){

                     console.log('REDIRECTEEEEEED')
                     this.$store.commit('setActualVideo', this.computedStoryMap.videos['cyberpunk_fusil'])
                  }

               
          
        

              }

          } 

      }

    },


    compareForAudios(actualVideoTimeCode, oneAudio){
      if(oneAudio.type) {
        if (actualVideoTimeCode >= oneAudio.at && this.audiosAlreadySent.indexOf(oneAudio.id) === -1) 
        {
          this.audiosAlreadySent.push(oneAudio.id);
          this.$store.commit("setActualAudio", oneAudio);
        } 
        if(actualVideoTimeCode >=  oneAudio.to &&  this.audiosAlreadySent.indexOf(oneAudio.id) !== -1 ){
          console.log("stop AUDIO .to :", oneAudio.id);
          this.$store.commit('setActualAudio', {});
          this.audiosAlreadySent = [];
          // this.ctasAlreadySent.splice(oneAudio,1)

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
