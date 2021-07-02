import { Scene } from 'phaser';
import  Phaser from 'phaser';
import door from '@/components/GameCenterComponents/assets/img/level1/door.png'
// import backgroundLava from '@/components/GameCenterComponents/assets/img/level2/background-lava.png'


function checkOverlap(spriteA, spriteB) {
    // console.log("sprite A : " + spriteA.getBounds(), "sprite B :" + spriteB.getBounds())
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    var result = Phaser.Geom.Rectangle.Intersection( boundsA , boundsB);
    return (result.width !=0 || result.height!=0 )
}


export default class LevelLava extends Scene {

    constructor(){
         super({
            key: 'LevelLava'
        });
        
    }

    init (data) {
        // console.log('data on init :', data.score);
         
        if(data.score){

            this.backedScore = data.score;
            console.log('data on init :', this.backedScore );
        }
    }
    preload () {
        this.door_to_lvl_2 =  this.load.image('door', door)
        this.load.spritesheet(
            "chevre",
            this.chevre,
            { frameWidth: 100, frameHeight: 87 }
        );
       

       
    }
    create () {

        this.door_to_lvl_2 = this.add.sprite(400, 460, "door").setScale(0.5);

        this.platforms = this.physics.add.staticGroup();

        this.cameras.main.setBackgroundColor("#FFFFFF");

        this.monSoleil = this.add.image(200,50, "soleil").setOrigin(0,0);
    
        // platforms
        this.platforms.create(400, 568, 'cicada').refreshBody();


        this.player = this.physics.add.sprite(400,200,  'chevre');
        this.player.setBounce(0.4);
        this.player.setCollideWorldBounds(true);
            
        this.physics.add.collider(this.player, this.platforms);

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

        // __ Colliders
        this.physics.add.collider( this.player, this.platforms);

        // __ Camera 
        this.camera = this.cameras.main;
        this.camera.startFollow(this.player);
        this.camera.setFollowOffset(20, 0);

    }

   update () {
     const cursors = this.input.keyboard.createCursorKeys();

    // Mouvements
    if (cursors.left.isDown)
        {
            console.log('left');
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            console.log('right');
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
        else
        {
            console.log('turn');
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }

    if (cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }

    if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
        if (checkOverlap(this.player, this.door_to_lvl_2 )) {
        // console.log(this.player, this.door, 'okok')
            this.scene.start("PlayScene", {
                isFromLevelLava : true,
                backedScore: this.backedScore
            });
        } 
    }

    }
}