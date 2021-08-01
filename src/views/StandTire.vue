<template>
<div>


  <h1>Stand De Tire</h1>
  <div classe="inventaire">
    <h3>Inventaire :</h3>
    <ul>
      <li  v-for=" arme in this.computedAllWeapons" :key="arme.id">
          {{ arme.id }}
      </li>
    </ul>
  
  </div>
  <div classe="selection-arme">

    <h3>Arme selectionnée : </h3>
    <img class="arme-actuelle" :src="'assets/stand/images/armes/' + this.computedWeapon + '.png'" alt="">
  </div>



</div>
</template>

<script>
export default {
    name:"StandTire",
    mounted(){
      console.log(this.computedAllWeapons)
    },


    computed: {
      computedWeapon() {
        return this.$store.getters.getWeapon;
      },
      computedAllWeapons() {
        return this.$store.getters.getAllWeapons;

      }

    }

}
</script>

<style>

.arme-actuelle {
  width: 150px;
}

</style>