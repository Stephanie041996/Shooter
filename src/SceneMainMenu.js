/* eslint-disable func-names */
/* eslint-disable no-undef */
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

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('sprBtnPlayHover', sprBtnPlayHover);
    this.load.image('sprBtnPlayDown', sprBtnPlayDown);
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
    // eslint-disable-next-line func-names
    this.btnPlay.on('pointerover', function () {
      this.btnPlay.setTexture('sprBtnPlayHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnPlay.on('pointerout', function () {
      this.setTexture('sprBtnPlay');
    });
    this.btnPlay.on('pointerdown', function () {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', function () {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneMain');
    }, this);
    // LeaderBoard Button
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.btnlbPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'LBbutton',
    );
    this.btnlbPlay.setInteractive();
    // eslint-disable-next-line func-names
    this.btnlbPlay.on('pointerover', function () {
      this.btnlbPlay.setTexture('LBbuttonHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnlbOver.play(); // play the button over sound
    }, this);

    this.btnlbPlay.on('pointerout', function () {
      this.setTexture('LBbutton');
    });
    this.btnlbPlay.on('pointerdown', function () {
      this.btnlbPlay.setTexture('LBbuttonDown');
      this.sfx.btnlbDown.play();
    }, this);

    this.btnlbPlay.on('pointerup', function () {
      this.btnlbPlay.setTexture('LBbutton');
      this.scene.start('SceneLeaderBoard');
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