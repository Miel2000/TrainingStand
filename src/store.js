import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    currentTimeVideo: 0,
    currentTimeAudio: 0,
    actualWeapon:"banane",
    // STAND INFOS 

    armes: [
      {id: "fusil", img: "assets/stand/images/armes/fusil.png", dmg: 100 },
      {id: "couteau", img: "assets/stand/images/armes/couteau.png", dmg: 50 },
      {id: "banane", img: "assets/stand/images/armes/banane.png", dmg: 35 }
    ],
  
  },  

  getters : {


    getWeapon(state) {
      return state.actualWeapon;
    },

    getAllWeapons(state){
      return state.armes;
    }


    
  },

  mutations: { 

    setActualWeapon: (state, x) => {
      state.actualWeapon = x;
    },
    
  }
});
