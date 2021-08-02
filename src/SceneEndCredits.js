import Phaser from 'phaser';

export default class SceneEndCredits extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneEndCredits' });
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'Thank You for playing', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.text = this.add.text(this.game.config.width * 0.5, 258, 'This Game was created by Stephanie as ', {
      fontFamily: 'monospace',
      fontSize: 18,
      color: '#ffffff',
      align: 'center',
    });
    this.text.setOrigin(0.5);

    this.text2 = this.add.text(this.game.config.width * 0.5, 298, ' a final capstone for the javascript module in microverse', {
      fontFamily: 'monospace',
      fontSize: 18,
      color: '#ffffff',
      align: 'center',
    });
    this.text2.setOrigin(0.5);
  }
}