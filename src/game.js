import 'phaser';
import SceneMain from './SceneMain.js';
import SceneMainMenu from './SceneMainMenu.js';
import SceneGameOver from './SceneGameOver.js';
import SceneLeaderBoard from './SceneLeaderBoard.js';
import SceneEndCredits from './SceneEndCredits.js';
import './style.css';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  width: 800,
  height: 840,
  backgroundColor: 'black',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneGameOver,
    SceneLeaderBoard,
    SceneEndCredits,

  ],
  pixelArt: true,
  roundPixels: true,
};

export default class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.points = 0;
    this.playerName = '';
    this.scene.start('SceneMainMenu');
  }
}

window.game = new Game();
