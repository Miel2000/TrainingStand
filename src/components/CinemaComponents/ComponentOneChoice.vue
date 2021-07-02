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
        this.exceptionsManager(choiceSelected);
        this.$store.commit("setActualVideo",   this.computedStoryMap.videos[choiceSelected.route]);
        this.$store.commit("setActualChoices", []);
    
      },

      exceptionsManager(choiceSelected) {

     
     
        if(choiceSelected.route == 'shooting_remake'){
        
          this.$store.commit('setActualNinjaLife',  200);
          this.$store.commit('setActualAudio',      {});
          this.$store.commit('setActualEnemy',      this.computedStoryMap.videos[choiceSelected.route].enemy );
          this.$store.commit('setActualBackground', this.computedStoryMap.videos[choiceSelected.route].backgrounds );

        }

        if(choiceSelected.id === "banane") {
            this.$store.commit("setActualWeapon", "banane");
        }
        if(choiceSelected.id === "couteau") {
            this.$store.commit("setActualWeapon", "couteau");
        }
        if(choiceSelected.id === "fusil") {
            this.$store.commit("setActualWeapon", "fusil");
        }


        if(choiceSelected.id === "cyberpunk") {
          this.$store.commit('setActualAudio',      {});

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
