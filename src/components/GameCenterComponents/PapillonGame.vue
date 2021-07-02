<template>
    <div class='papillon-game'>
        <h1>LE JEU DU PAPYON</h1>
        <div class='game'>
        <div  @click="initializeGame"  class="flex" >
            <a  href="#1"  class="btn">Initialize</a>
        </div>
        <ion-phaser
            class="ion-phaser"
            v-bind:game.prop='game'
            v-bind:initialize.prop='initialize'
        />
        </div>
    </div>
</template>

<script>
import Phaser from "phaser";

export default {
  methods: {
    initializeGame() {
      this.initialize = true;
    },
  },

  data() {
    return {
      initialize: false,

      game: {
        width: 800,
        height: 600,
        physics: {
          default: "arcade",
          arcarde: {
            gravity: { y: 100 },
            debug: true,
          },
        },
        type: Phaser.AUTO,
        scene: {
          init() {
            this.cameras.main.setBackgroundColor("#24252A");
          },
          preload() {
            this.cameras.main.setBackgroundColor("#24252A");
            this.load.spritesheet(
              "chevre",
              "assets/gamecenter/img/chevre-sprited.png",
              { frameWidth: 100, frameHeight: 87 }
            );
            this.load.image("ground", "assets/gamecenter/img/ground-grass.png");
            this.load.image("tree",   "assets/gamecenter/img/tree.png");
            this.load.image("sky",    "assets/gamecenter/img/sky.png");
            this.load.image("poring", "assets/gamecenter/img/poring.png");
            this.load.image("poring", "assets/gamecenter/img/poring.png");
          },

          create: function() {
            // Gestion du sprite perso
            // to fix : gravityY, problem de dom virtuel j'crois bieng
            // - sans .bind(this) setGravityY soit this.player.gravity.y n'est pas pris en compte, mais rien ne bug
            // - avec .bind(this) la gravité est bien modifier, seulement le code plante et n'affichera pas le reste.

            // const self = this;

            this.platforms = this.physics.add.staticGroup();
            this.player = this.physics.add.sprite(100, 450, "chevre");
            this.player.setBounce(0.2);
            this.player.setCollideWorldBounds(true);
            this.player.setVelocityY(200).bind(this);

            console.log("this : ", this);
            console.log("self : ", self);

            this.anims.create({
              key: "left",
              frames: this.anims.generateFrameNumbers("chevre", {
                start: 0,
                end: 1,
              }),
              frameRate: 10,
              repeat: -1,
            });
            this.anims.create({
              key: "turn",
              frames: this.anims.generateFrameNumbers("chevre", {
                start: 2,
                end: 4,
              }),
              frameRate: 20,
            });
            this.anims.create({
              key: "right",
              frames: this.anims.generateFrameNumbers("chevre", {
                start: 5,
                end: 6,
              }),
              frameRate: 10,
              repeat: -1,
            });

            // ce qui utilisera la physique passera par platforms

            this.add.image(400, 300, "sky");
            this.platforms
              .create(400, 568, "ground")
              .setScale(1)
              .refreshBody();
            this.platforms.create(10, 250, "ground").setScale(0.3);
            this.add.image(400, 300, "chevre");
          },

          update() {},
        },
      },
    };
  },
};
</script>

<style scoped>
</style>
