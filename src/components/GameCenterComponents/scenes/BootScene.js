import { Scene } from 'phaser'

import chevre from '@/components/GameCenterComponents/assets/img/chevre-sprited.png'

// level 1
import bamboo from '@/components/GameCenterComponents/assets/mp3/hit_bambo.mp3'
import reload_shotgun from '@/components/GameCenterComponents/assets/mp3/reload_shotgun.mp3'
import fire_sound from '@/components/GameCenterComponents/assets/mp3/fire_sound.mp3'

import butterfly from '@/components/GameCenterComponents/assets/img/butterz.png'
import groundGrass from '@/components/GameCenterComponents/assets/img/ground-grass.png'
import sky from '@/components/GameCenterComponents/assets/img/sky.png'
import blunty from '@/components/GameCenterComponents/assets/img/level1/blunty.png'
import doubt from '@/components/GameCenterComponents/assets/img/level1/doubt.png'
import tete from '@/components/GameCenterComponents/assets/img/level1/tete.png'
import crackhead from '@/components/GameCenterComponents/assets/img/level1/crackhead.png'
import snes from '@/components/GameCenterComponents/assets/img/level1/snes.png'
import uchiwa from '@/components/GameCenterComponents/assets/img/level1/uchiwa.png'
import justice from '@/components/GameCenterComponents/assets/img/level1/justice.png'
import jul from '@/components/GameCenterComponents/assets/img/level1/jul_le_s.png'
import evangeliun from '@/components/GameCenterComponents/assets/img/level1/evangeliun.png'
import chat from '@/components/GameCenterComponents/assets/img/level1/chat.png'
import cicada from '@/components/GameCenterComponents/assets/img/level1/cicada.png'
import soulmates from '@/components/GameCenterComponents/assets/img/level1/soulmates.png'
import shotgun from '@/components/GameCenterComponents/assets/img/shotgun.png'


// level 2
import soleil from '@/components/GameCenterComponents/assets/img/level2/soleil.png'





export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' });

  }

  preload () {
    // Way Level 1
    this.load.image('blunty',     blunty)
    this.load.image('tete',       tete)
    this.load.image('doubt',      doubt)
    this.load.image('crackhead',  crackhead)
    this.load.image('snes',       snes)
    this.load.image('uchiwa',     uchiwa)
    this.load.image('justice',    justice)
    this.load.image('jul',        jul)
    this.load.image('evangeliun', evangeliun)
    this.load.image('chat',       chat)
    this.load.image('cicada',     cicada)
    this.load.image('soulmates',  soulmates)
    this.load.image('shotgun',    shotgun)

    // Way Level 2
     

    this.load.image('groundlvl2', cicada)
    this.load.image('soleil',     soleil)
    this.load.image('sky',        sky)


    this.load.spritesheet(
               "chevre",
                chevre,
                { frameWidth: 100, frameHeight: 87 }
              )

    // this.load.image('tree', tree)
    this.load.image('ground',         groundGrass)
    this.load.image('butterfly',      butterfly)
    this.load.audio('bamboo',         bamboo)
    this.load.audio('reload_shotgun', reload_shotgun)
    this.load.audio('fire_sound',     fire_sound)
  }

  create () {
  
    this.scene.start('PlayScene')
  }
  update(){

  }
}