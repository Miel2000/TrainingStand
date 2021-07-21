export default {

    videos: {

        intro1: {
            id: 'intro1',
            self: {

                url: "intro1.mp4",
                controls: true,
                options: {

                }
 
            },
     
            timedChoices: [

                    {
                        at: 12,
                        id: "intro2",
                        text: "éh wa chu bouillant",
                        route: "intro2",
                        type: "choice"
                    },
             


                ],


          
        },
        
        intro2: {
            id: 'intro2',
            self: {

                url: "intro2.mp4",
                controls: true,
               
            },

            timedChoices: [

                {
                    at: 15,
                    id: "weed",
                    text: "Start Teh Game",
                    route: "weed",
                    type: "choice"
                },

            ],

        },

        weed: {
            id: 'weed',
            self: { 

                url: "weed_start.mp4",
                controls: true,
                options: {

                }
 
            },
            timedAudios : [
                {
                  
                    at: 1,
                    id: 'bobmarley',
                    url: 'bob_marley.mp3',
                    isContinue: true,
                    type: 'sound'
                }

            ],

            timedChoices: [
    
                {
                    at: 56.5,
                    id: "hokage",
                    text: "Devenir Hokage",
                    route: "hokage",
                    type: "choice"
                },
                
                {
                    at: 57.5,
                    id: "papillon",
                    text: "Chasser les papillons",
                    route: "papillon",
                    type: "choice"
                },
              
            ]

        },

        papillon: {
            id:"papillon",
        
            backgrounds: [],
            enemy:[
                {  
                    id: "papillon",
                    url: "butterz.png",
                    vie: 100,
                    type: "papillon"
                    
                },
            ]

        },

        hokage: {
            id: 'hokage',
            self: { 

                url: "weed_hokage.mp4",
                controls: true,
                options: {}
 
            },
            
            timedChoices: [
         
                    {
                        at: 7.5,
                        id: "banane",
                        text: "Banane",
                        route: "banane",
                        img: "banane.png",
                        type: "choice"
                    },
                    
                    {
                        at: 7.5,
                        id: "couteau",
                        text: "Couteau",
                        route: "couteau",
                        img: "couteau.png",
                        type: "choice"
                    },
                    {
                        at: 7.5,
                        id: "fusil",
                        text: "Fusil",
                        route: "fusil",
                        img: "fusil.png",
                        type: "choice"
                    }
                ],

                
        },

        banane: {
            id:"banane",
            self: {

                url: "weed_hokage_banane.mp4",
                controls: true,
                options: {
                    
                }
            },

            timedAudios: [
                {
                    at: 18,
                    url: "naruto-sound.mp3",
                    type:"sound"
                },
            ],

            timedImposedRoots: [
                {
                    at: 40.9,
                    id:"shooting",
                    route: "shooting",
                    type:"imposed",

                }
            ]
        },

        couteau: {
            id:"couteau",
            self: {

                url: "weed_hokage_couteau.mp4",
                controls: true,
                options: {
            
                }
            },
            timedAudios: [
                {
                    at: 18,
                    url: "naruto-sound.mp3",
                    type:"sound"
                },
            ],

            timedImposedRoots: [
                {
                    at: 42.7,
                    id:"shooting",
                    route: "shooting",
                    type:"imposed",

                }
            ]
        },

        fusil: {
            id:"fusil",
            self: {

                url: "weed_hokage_fusil.mp4",
                controls: true,
                options: {
                
                }
            },
            timedAudios: [
                {
                    at: 18,
                    url: "naruto-sound.mp3",
                    type:"sound"
                },
            ],

            timedImposedRoots: [
                {
                    at: 40,
                    id:"shooting",
                    route: "shooting",
                    type:"imposed",

                }
            ]
        },

        shooting:  {
            id:"shooting",
            isBackground: true,
 
            backgrounds: [
         
                {   
                    url:"shooting_naruto.mp4",
                    control:true,
                    css:{},
                    isLooping: true,
                    displayControl: false,
                    type:"video"
                
                },
            ],
            enemy: [
            {  
                id: "castaner",
                url: "castaner.png",
                vie: 100,
                type: "enemy"
                
            },
            {
                id: "castex",
                url: "castex.png",
                vie: 100,
                type: "enemy"
                
            },
            
         
        ],

        },

        valorant_banane: {
            id:"valorant_banane",

            self: {

                url: "valorant/valorant_banane.mp4",
                controls: true,
                options: {
                
                }
             },
            timedAudios: [
                {
                    id:"valorant_banane_audio",
                    at: 0,
                    to:26,
                    isLooping:true,
                    url: 'valorant/valorant_sound.mp3',
                    type: 'sound'
                }
            ],
            timedChoices: [

                {
                    at: 18,
                    text:"Partir avec la banane",
                    id:"cyberpunk_banane",
                    route: "cyberpunk_banane",
                    type:"choice",
                },
      
                {
                    at: 14.5,
                    id: "couteau",
                    text: "Couteau",
                    route: "shooting_remake",
                    img: "couteau.png",
                    type: "choice"
                },
                {
                    at: 14,
                    id: "fusil",
                    text: "Fusil",
                    route: "shooting_remake",
                    img: "fusil.png",
                    type: "choice"
                },
            ],
            timedImposedRoots: [
                {
                    at: 26,
                    id:"valorant_b_to_cyberpunk_banane",
                    route: "cyberpunk_banane",
                    type:"imposed",

                }
            ]
          

        },

        valorant_couteau: {

            id:"valorant_couteau",
            self: {

                url: "valorant/valorant_couteau.mp4",
                controls: true,
             },
            timedAudios: [
                {
                    id:"valorant_banane_audio",
                    at: 0,
                    to:32.5,
                    isLooping:true,
                    url: 'valorant/valorant_sound.mp3',
                    type: 'sound'
                }
            ],
            timedChoices: [

                {
                    at: 4,
                    text:"Partir avec le couteau",
                    id:"cyberpunk_couteau",
                    route: "cyberpunk_couteau",
                    type:"choice",
                },
                {
                    at: 7.5,
                    id: "banane",
                    text: "Banane",
                    route: "shooting_remake",
                    img: "banane.png",
                    type: "choice"
                },
                
                {
                    at: 7.5,
                    id: "fusil",
                    text: "Fusil",
                    route: "shooting_remake",
                    img: "fusil.png",
                    type: "choice"
                },
            ],
            timedImposedRoots: [
                {
                    at: 33,
                    id:"valorant_c_to_cyberpunk_couteau",
                    route: "cyberpunk_couteau",
                    type:"imposed",

                }
            ]
      
        },

        valorant_fusil: {
            id:"valorant_fusil",

            self: {

                url: "valorant/valorant_fusil.mp4",
                controls: true,
             },
             timedAudios: [
                {
                    id:"valorant_banane_audio",
                    at: 0,
                    to:2,
                    isLooping:true,
                    url: 'valorant/valorant_sound.mp3',
                    type: 'sound'
                },
                {
                    id:"valorant_banane_audio",
                    at: 9.5,
                    to:32.5,
                    isLooping:true,
                    url: 'valorant/valorant_break_suite.mp3',
                    type: 'sound'
                }
            ],
            timedChoices: [

                {
                    at: 23.5,
                    text:"Partir avec le fuzil",
                    id:"cyberpunk_fusil",
                    route: "cyberpunk_fusil",
                    type:"choice",
                },
                
                {
                    at: 15,
                    id: "banane",
                    text: "Banane",
                    route: "shooting_remake",
                    img: "banane.png",
                    type: "choice"
                },
                
                {
                    at: 15,
                    id: "couteau",
                    text: "Couteau",
                    route: "shooting_remake",
                    img: "couteau.png",
                    type: "choice"
                },
            ],
            timedImposedRoots: [
                {
                    at: 34,
                    id:"valorant_f_to_cyberpunk_fusil",
                    route: "cyberpunk_fusil",
                    type:"imposed",

                }
            ]
    

        },

        shooting_remake: {
            id:"shooting_remake",
            isBackground: true,
          
            backgrounds: [
         
                {   
                    url:"shooting_naruto.mp4",
                    control:true,
                    css:{},
                    isLooping: true,
                    displayControl: false,
                    type:"video"
                
                },
                {
                    url:"naruto-background-sound.mp3",
                    controle: true,
                    type:"audio"

                }
            ],
            timedAudios: [],
            enemy: [
            {  
                id: "castaner",
                url: "castaner.png",
                vie: 100,
                type: "enemy"
                
            },
            {
                id: "castex",
                url: "castex.png",
                vie: 100,
                type: "enemy"
                
            },
  
        ],

        },

  
        cyberpunk_fusil: {
            id:"cyberpunk_fusil",
            self:{
                url: "cyberpunk/cyberpunk_fusil.mp4",
                controls: true,
                
            },
            timedChoices: [
                {
                    at: 36,
                    to:42,
                    id: "neopdf",
                    text: "Parler à Néo",
                    route: "neopdf",
                    img: "neopdf.png",
                    type: "choice"
                },
                {
                    at: 39,
                    to:42,
                    id: "stayOnCyberpunk",
                    text: "Répondre au Nano-téléphone",
                    img: "telephone.png",
                    type: "choice"
                },
                {
                    at: 68,
                    to:76,
                    id: "paradi",
                    text: "Esquiver l'explosiun",
                    route: "paradi",
                    img: "eskive.png",
                    type: "choice"
                },
       
            ],
            timedAudios : [
                {
                    id:"cyberpunk_audio",
                    at: 0,
                    to:67.5,
                    isLooping:true,
                    url: 'background/cyberpunk_audio.mp3',
                    type: 'sound'
                }

            ],
            timedCtas: [
                {
                    id:"capsule_go_out",
                    at: 3,
                    to: 15,
                    text:'Sortir de la capsule',
                    type:"dodge",
                 
                    attributes : {
                        dmg: 100,
                        deathScene: "death_gatling"
                    }
                },
                
            ],
            timedImposedRoots: [

                {
                    at: 74,
                    id:"paradi",
                    route: "paradi",
                    type:"imposed",

                }
            ],
         
        },
        cyberpunk_couteau: {
            id:"cyberpunk_couteau",
            self:{
                url: "cyberpunk/cyberpunk_couteau.mp4",
                controls: true,
                
            },
            timedChoices: [
                {
                    at: 36,
                    to:42,
                    id: "neopdf",
                    text: "Parler à Néo",
                    route: "neopdf",
                    img: "neopdf.png",
                    type: "choice"
                },
                {
                    at: 39,
                    to:42,
                    id: "stayOnCyberpunk",
                    text: "Répondre au Nano-téléphone",
                    img: "telephone.png",
                    type: "choice"
                },
                {
                    at: 68,
                    to:76,
                    id: "paradi",
                    text: "Esquiver l'explosiun",
                    route: "paradi",
                    img: "eskive.png",
                    type: "choice"
                },
       
            ],
            timedAudios : [
                {
                    id:"cyberpunk_audio",
                    at: 0,
                    isLooping:true,
                    url: 'background/cyberpunk_audio.mp3',
                    type: 'sound'
                }

            ],
            timedCtas: [
                {
                    id:"capsule_go_out",
                    at: 3,
                    to: 15,
                    text:'Sortir de la capsule',
                    type:"dodge",
                 
                    attributes : {
                        dmg: 100,
                        deathScene: "death_gatling"
                    }
                },
                
            ],
            timedImposedRoots: [

                {
                    at: 74,
                    id:"paradi",
                    route: "paradi",
                    type:"imposed",

                }
            ],
         
        },
        cyberpunk_banane: {
            id:"cyberpunk_banane",
            self:{
                url: "cyberpunk/cyberpunk_banane.mp4",
                controls: true,
                
            },
            timedChoices: [
                {
                    at: 36,
                    to:42,
                    id: "neopdf",
                    text: "Parler à Néo",
                    route: "neopdf",
                    img: "neopdf.png",
                    type: "choice"
                },
                {
                    at: 39,
                    to:42,
                    id: "stayOnCyberpunk",
                    text: "Répondre au Nano-téléphone",
                    img: "telephone.png",
                    type: "choice"
                },
                {
                    at: 71.5,
                    to:76,
                    id: "paradi",
                    text: "Esquiver l'explosiun",
                    route: "paradi",
                    img: "eskive.png",
                    type: "choice"
                },
       
            ],
            timedAudios : [
                {
                    id:"cyberpunk_audio",
                    at: 0,
                    isLooping:true,
                    url: 'background/cyberpunk_audio.mp3',
                    type: 'sound'
                }

            ],
            timedCtas: [
                {
                    id:"capsule_go_out",
                    at: 3,
                    to: 15,
                    text:'Sortir de la capsule',
                    type:"dodge",
                 
                    attributes : {
                        deathScene: "death_gatling"
                    }
                },
                
            ],
            timedImposedRoots: [

                {
                    at: 78,
                    id:"paradi",
                    route: "paradi",
                    type:"imposed",

                }
            ],
         
        },



        death_gatling : {
            id:"death_gatling",
            self: {
                url: "death/capsule_death_gatling.mp4"
            },
            timedImposedRoots: [

                {
                    at: 14.5,
                    id:"cyberpunk_imposed",
                    route:"cyberpunk",
                    type:"imposed",

                }
            ],

        
            
        },
      
        neopdf : {
            id:"neopdf",
            self: {
                url: "neopdf.mp4"
            },
           
            timedImposedRoots: [
                {
                    at: 28,
                    id:"diablo",
                    route:"diablo",
                    type:"imposed",
                }
            ]
          
           
        },
        // bouddhiste n'est pas implémenté (brouillon test)
        bouddhiste : {
            id:"bouddhiste",
            self: {
                url: "bouddhiste.mp4"
            },
            timedChoices: [
                {
                    at: 35,
                    id: "diablo",
                    text: "Peter au nez des gens",
                    route: "bouddhiste",
                    img: "bouddhiste.png",
                    type: "choice"
                },
                {
                    at: 37,
                    id: "diablo",
                    text: "Péter des gens",
                    route: "diablo",
                    img: "diablo.png",
                    type: "choice"
                },
            ],
           
           
        },

        


        paradi_banane:{
            id:'paradi_banane',
            self: {
                url: "paradi/paradi_banane.mp4"
            },
        },
        paradi_couteau:{
            id:'paradi_couteau',
            self: {
                url: "paradi/paradi_couteau.mp4"
            },
        },
        paradi_fusil:{
            id:'paradi_fusil',
            self: {
                url: "paradi/paradi_fusil.mp4"
            },
        },


        diablo_banane:{
            id:'diablo_banane',
            self: {
                url: "diablo/diablo_banane.mp4"
            },
        },
        
        diablo_couteau:{
            id:'diablo_couteau',
            self: {
                url: "diablo/diablo_couteau.mp4"
            },
        },
        
        diablo_fusil:{
            id:'diablo_fusil',
            self: {
                url: "diablo/diablo_fusil.mp4"
            },
        },
        

    

        generique_zelda : {
            id:"generique_zelda",
            generique_audio_url : "generique/zelda_fairy_foutain.mp3",
            audio: {
                intro: { 
                    url: "intro_zelda.mp3"
                 },
                points: {
                    papillon: {
                        pp0 : '0_pp.mp3', 
                        pp1 : '1_pp.mp3', 
     
                    },
                    nuage: {
                        pn0 : '0_pn.mp3',
                        pn1 : '1_pn.mp3',
                    }
                }
            }
        }

    }
}

