/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import 'phaser';
import SceneMain from './SceneMain';
import SceneMainMenu from './SceneMainMenu';
import SceneGameOver from './SceneGameOver';
import SceneLeaderBoard from './SceneLeaderBoard';
import InputNameScene from './inputNameScene';

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
    InputNameScene,
  ],
  pixelArt: true,
  roundPixels: true,
};

export default class Game extends Phaser.Game {
    constructor() {
      super(config);
      this.score = 0;
      this.playerName = '';
      this.scene.start('SceneMainMenu');
    }
  }
  
  window.game = new Game();