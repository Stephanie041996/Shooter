/* eslint-disable func-names */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import Button from './Objects/Button';
import {
  getScore,
} from './score.js';

export default class SceneLeaderBoard extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneLeaderBoard' });
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnRestart',
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on('pointerover', function () {
      this.btnRestart.setTexture('sprBtnRestartHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnRestart.on('pointerout', function () {
      this.setTexture('sprBtnRestart');
    });

    this.btnRestart.on('pointerdown', function () {
      this.btnRestart.setTexture('sprBtnRestartDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on('pointerup', function () {
      this.btnRestart.setTexture('sprBtnRestart');
      this.scene.start('SceneGameOver');
    }, this);

    getScore().then((scores) => {
      scores.sort((a, b) => b.score - a.score);
      this.add.text(100, 20, 'shooter', 'RANK  SCORE   NAME').setTint(0x08B0F8);
      for (let i = 0; i < 5; i += 1) {
        this.add.text(100, 90 * (i + 1), 'shooter', ` ${i + 1}     ${scores[i].score}   ${scores[i].user}`).setTint(0x08B0F8);
      }
    }).catch(() => {

    });
  }
}
