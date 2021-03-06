import Phaser from 'phaser';
import sprBtnPlay from './content/sprBtnPlay.png';
import sprBtnPlayHover from './content/sprBtnPlayHover.png';
import sprBtnPlayDown from './content/sprBtnPlayDown.png';
import sprBtnRestart from './content/sprBtnRestart.png';
import sprBtnRestartHover from './content/sprBtnRestartHover.png';
import sprBtnRestartDown from './content/sprBtnRestartDown.png';
import sndBtnOver from './content/sndBtnOver.wav';
import sndBtnDown from './content/sndBtnDown.wav';
import LBbutton from './content/LBbutton.png';
import LBbuttonHover from './content/LBbuttonhover.png';
import LBbuttonDown from './content/LBbuttonDown.png';
import Quitbtn from './content/Quitbtn.png';
import Quitbtnhover from './content/Quitbtnhover.png';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('sprBtnPlayHover', sprBtnPlayHover);
    this.load.image('sprBtnPlayDown', sprBtnPlayDown);
    this.load.image('Quitbtn', Quitbtn);
    this.load.image('Quitbtnhover', Quitbtnhover);
    this.load.image('sprBtnRestart', sprBtnRestart);
    this.load.image('sprBtnRestartHover', sprBtnRestartHover);
    this.load.image('sprBtnRestartDown', sprBtnRestartDown);
    this.load.image('LBbutton', LBbutton);
    this.load.image('LBbuttonHover', LBbuttonHover);
    this.load.image('LBbuttonDown', LBbuttonDown);

    this.load.audio('sndBtnOver', sndBtnOver);
    this.load.audio('sndBtnDown', sndBtnDown);
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnPlay',
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('sprBtnPlayHover');
      this.sfx.btnOver.play();
    }, this);

    this.btnPlay.on('pointerout', () => {
      this.setTexture('sprBtnPlay');
    });
    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneMain');
    }, this);

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GALAXY SHOOTER GAME', {
      fontFamily: 'monospace',
      fontSize: 55,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);
  }
}