import 'phaser';
import { checkScore, renderPoints, renderScore } from './score.js';

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  create() {
    checkScore();
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.title.setOrigin(0.5);
    // LeaderBoard Button
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'LBbutton',
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('LBbuttonHover');
      this.sfx.btnOver.play();
    }, this);

    this.btnPlay.on('pointerout', () => {
      this.setTexture('LBbutton');
    });
    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('LBbuttonDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('LBbutton');
      this.scene.start('SceneLeaderBoard');
    }, this);
  }
}