import Phaser from 'phaser';
import { fetchScores, gotScores, renderFinalscore } from './score.js';
import { appAlert } from './utils.js';

export default class SceneLeaderBoard extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneLeaderBoard' });
  }

  preload() {
    fetchScores(gotScores, appAlert, this);
  }

  create() {
    const title = this.add.text(this.game.config.width * 0.5, 80, 'Leader Board', {
      fontFamily: 'monospace',
      fontSize: 32,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    title.setOrigin(0.5);
    renderFinalscore();
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'Quitbtn',
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on('pointerover', () => {
      this.btnRestart.setTexture('Quitbtnhover');
      this.sfx.btnOver.play();
    }, this);

    this.btnRestart.on('pointerout', () => {
      this.setTexture('Quitbtn');
    });

    this.btnRestart.on('pointerdown', () => {
      this.btnRestart.setTexture('Quitbtnhover');
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on('pointerup', () => {
      this.btnRestart.setTexture('Quitbtn');
      this.scene.start('SceneEndCredits');
    }, this);
  }
}
