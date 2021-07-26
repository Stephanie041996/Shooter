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
  type: Phaser.WEBGL,
  width: 800,
  height: 840,
  backgroundColor: 'black',
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

const game = new Phaser.Game(config);
