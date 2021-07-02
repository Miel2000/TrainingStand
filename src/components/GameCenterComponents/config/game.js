import Phaser from 'phaser'
import BootScene from '@/components/GameCenterComponents/scenes/BootScene'
import PlayScene from '@/components/GameCenterComponents/scenes/PlayScene'
import LevelLava from '@/components/GameCenterComponents/scenes/LevelLava'
import LevelPizza from '@/components/GameCenterComponents/scenes/LevelPizza'


function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 2500,
    height: 1000,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 100 },
        debug: false
      }
    },
    scene: [BootScene, PlayScene, LevelLava, LevelPizza]
  })
}

export default launch
export { launch }
