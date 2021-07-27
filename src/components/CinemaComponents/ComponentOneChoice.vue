<template>
<div>
  
	<div v-for="computedChoice in computedChoices" :key="computedChoice.id" style="text-align:center">

   <img v-if="computedChoice.id === 'diablo'"  

         style="height:50px" 
         :src="'./assets/images/' + computedWeapon + '.png'" 
         :alt="computedChoice.route" >

    <a v-if="computedChoice"
      class="oneChoice"
      :isContinuePlaying="computedChoice.isContinue"
      @click="choiceClickHandler(computedChoice)"
    >

        {{ computedChoice.text }}

   </a>
    </div>
</div>

</template>


<script>

export default {


  created() {
    //
  },

  mounted() {
  },

  data() {
     return {};
  },
  computed: {

    computedStoryMap(){
      return    this.$store.getters.getStoryMap;
    },
    computedChoices(){
      return    this.$store.getters.getChoices;
    },
    computedWeapon() {
      return    this.$store.getters.getWeapon;
    }

    },

 

  methods: {
      choiceClickHandler(choiceSelected) {
       if(choiceSelected.id == 'stayOnCyberpunk') {
          return this.$store.commit("setActualChoices", []);
        }
        if(choiceSelected.id == 'paradi'){
          this.$store.commit('setActualAudio', {})
          return this.execptionsWhenParadi(choiceSelected.id,this.computedWeapon)
        }
        if(choiceSelected.id == 'cyberpunk_couteau' ||  choiceSelected.id == 'cyberpunk_banane'  || choiceSelected.id == 'cyberpunk_fusil' ){
          this.$store.commit('setActualAudio', {})
          this.$store.commit("setActualChoices", {});
          this.$store.commit("setActualVideo",   this.computedStoryMap.videos[choiceSelected.route]);


        }
       
     
        this.exceptionsManager(choiceSelected);
        this.$store.commit("setActualVideo",   this.computedStoryMap.videos[choiceSelected.route]);
        this.$store.commit("setActualChoices", []);
    
      },

      execptionsWhenParadi(choiceSelectedId,weapon){
        if( choiceSelectedId== "paradi" && weapon == "banane"){
                this.$store.commit('setActualAudio',      {});
                return this.$store.commit('setActualVideo', this.computedStoryMap.videos['paradi_banane'])

              }
              if( choiceSelectedId== "paradi" && weapon == "couteau"){
                return   this.$store.commit('setActualVideo', this.computedStoryMap.videos['paradi_couteau'])

              }
              if( choiceSelectedId == "paradi" && weapon == "fusil"){
                this.$store.commit('setActualAudio',      {});
                return   this.$store.commit('setActualVideo', this.computedStoryMap.videos['paradi_fusil'])

              }
        },
     

      exceptionsManager(choiceSelected) {
 
        if(choiceSelected.route == 'shooting_remake'){
        
          this.$store.commit('setActualNinjaLife',  300);
          this.$store.commit('setActualAudio',      {});
          this.$store.commit('setActualEnemy',      this.computedStoryMap.videos[choiceSelected.route].enemy );
          this.$store.commit('setActualBackground', this.computedStoryMap.videos[choiceSelected.route].backgrounds );

        }
        // choix de l'arme
        if(choiceSelected.id === "banane") {
            this.$store.commit("setActualWeapon", "banane");
        }
        if(choiceSelected.id === "couteau") {
            this.$store.commit("setActualWeapon", "couteau");
        }
        if(choiceSelected.id === "fusil") {
            this.$store.commit("setActualWeapon", "fusil");
        }


       
      

    },
  },
};
</script>




<style scoped lang="scss">
.oneChoice {
  display: flex;
  padding: 10px 20px;
  cursor: pointer;

}
</style>
