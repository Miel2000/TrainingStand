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
                    at: 40,
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
                    at: 40,
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

                url: "valorant_banane.mp4",
                controls: true,
                options: {
                
                }
             },
            backgrounds: [],
            timedChoices: [

                {
                    at: 16,
                    text:"Aller dans la jungle",
                    id:"fantome_noyade",
                    route: "fantome_noyade",
                    type:"choice",
                },
      
                {
                    at: 15,
                    id: "couteau",
                    text: "Couteau",
                    route: "shooting_remake",
                    img: "couteau.png",
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
          

            },

        
        valorant_couteau: {

            id:"valorant_couteau",
            self: {

                url: "valorant_couteau.mp4",
                controls: true,
             },
            backgrounds: [],
            timedChoices: [

                {
                    at: 4,
                    text:"Aller dans la jungle",
                    id:"cyberpunk",
                    route: "cyberpunk",
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
    
             
            },

        valorant_fusil: {
            id:"valorant_fusil",

            self: {

                url: "valorant_fusil.mp4",
                controls: true,
             },
            backgrounds: [],
            timedChoices: [

                {
                    at: 23,
                    text:"Partir avec le fuzil",
                    id:"cyberpunk",
                    route: "cyberpunk",
                    type:"choice",
                },
                
                {
                    at: 23,
                    id: "banane",
                    text: "Banane",
                    route: "shooting_remake",
                    img: "banane.png",
                    type: "choice"
                },
                
                {
                    at: 23,
                    id: "couteau",
                    text: "Couteau",
                    route: "shooting_remake",
                    img: "couteau.png",
                    type: "choice"
                },
            ],

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



        cyberpunk: {
            id:"cyberpunk",
            self:{
                url: "cyberpunk.mp4",
                controls: true,
                
            },
            timedChoices: [
                {
                    at: 36,
                    id: "neopdf",
                    text: "Parler à Néo",
                    route: "neopdf",
                    img: "neopdf.png",
                    type: "choice"
                },
                {
                    at: 39,
                    id: "stayOnCyberpunk",
                    text: "Répondre au Nano-téléphone",
                    img: "telephone.png",
                    type: "choice"
                },
                {
                    at: 60,
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
                    route: "cyberpunk",
                    type:"imposed",

                }
            ],
            
        },

        neopdf : {
            id:"neopdf",
            self: {
                url: "neopdf.mp4"
            },
            timedChoices: [
                {
                    at: 35,
                    id: "bouddhiste",
                    text: "Devenir Bouddhiste",
                    route: "neopdf",
                    img: "neopdf.png",
                    type: "choice"
                },
                {
                    at: 36.5,
                    id: "diablo",
                    text: "Péter des gens",
                    route: "diablo",
                    img: "diablo.png",
                    type: "choice"
                },
            ],
            timedImposedRoots: [],
           
        },
        paradi : {
            id:"paradi",
            self: {
                url: "paradi.mp4"
            },
            timedChoices: [
                {
                    at: 40,
                    id: "diablo",
                    text: "Peter des gens",
                    route: "diablo",
                    img: "diablo.png",
                    type: "choice"
                },
                {
                    at: 45,
                    id: "generique",
                    text: "Fin de l'aventure",
                    route: "generique",
                    img: "generique.png",
                    type: "choice"
                },
            ],
            timedImposedRoots: [],
           
        }

    }
}

