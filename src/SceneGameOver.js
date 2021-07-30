/* eslint-disable func-names */
// eslint-disable-next-line no-undef
export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
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
    // eslint-disable-next-line func-names
    this.btnPlay.on('pointerover', function () {
      this.btnPlay.setTexture('LBbuttonHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnPlay.on('pointerout', function () {
      this.setTexture('LBbutton');
    });
    this.btnPlay.on('pointerdown', function () {
      this.btnPlay.setTexture('LBbuttonDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', function () {
      this.btnPlay.setTexture('LBbutton');
      this.scene.start('SceneLeaderBoard');
    }, this);
  }
}