<template>
<div>
  
      <!-- Healty Bar -->
    <div v-if="computedLife" class="life-container">
      
      <h1 class="text-center eighties"  style="color:black"> {{ computedLife }} %</h1>

            <div class="healthbar">

                <div  class="healthbar text-center" 
                      :style="{ 
                      backgroundColor: computedLife <= 50 ? 'red' : 'green', 
                      margin: 0,
                      color: 'white',
                      width: computedLife + '%' 
                      }">
                </div>

            </div>

    </div>



    <div class="inventory-container">
    Inventaire :

        <!-- Weapon -->
      <div class="weapon-container">
        <img style="width:100px;"  v-if="computedWeapon === 'banane'"   src="/assets/images/banane.png"  alt="Banane yo" />
        <img style="width:100px;"  v-if="computedWeapon === 'fusil'"    src="/assets/images/fusil.png"   alt="fusil wésh" />
        <img style="width:100px;"  v-if="computedWeapon === 'couteau'"  src="/assets/images/couteau.png" alt="couteau uuuuu" />
      </div>

       <!-- pdf -->
      <div class="pdf-container">
        <div v-if="computedPdf > 0"> <img src="/assets/images/pdf.png" style="width:100px;" alt=""> </div>
      </div>

    </div>



</div>
</template>
<script>
export default {
  name: "ComponentHub",

  components: {},
  
  computed: {
    computedLife(){
          return this.$store.getters.getMyLife;
    },
    
    computedVideo(){
      return this.$store.getters.getVideo;

    },

    computedStoryMap(){
      return this.$store.getters.getStoryMap;
    },
    
    computedWeapon() {
      return this.$store.getters.getWeapon;
    },
    computedPdf() {
      return this.$store.getters.getPdf;
    },
  
  },
  data() {
    return {};
  },


  mounted() {

  },

  methods: {
    
  }
}
</script>
<style lang="scss" scoped>

  .eighties {
    color: #c81914;
    font-size: 20pt;
    font-family: "Eighties Horror";
    line-height: 1em;
    letter-spacing: 3px;
  }
  .healthbar {
    width: 80%;
    height: 2vh;
    border: 1px solid white;
    margin: auto;
    transition: width 500ms;
  }
  .text-center {
    text-align: center;
    color: #c81914;
  }


</style>
