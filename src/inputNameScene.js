import Phaser from 'phaser';
import {
  setScore,
} from './score';

export default class InputNameScene extends Phaser.Scene {
  constructor() {
    super({key: "InputNameScene"});
  }

  create() {
    
    const score = window.localStorage.getItem('score');
    this.text = this.add.text(10, 10,  'Please enter your name', 14).setTint(0xFFFFFF);

    const element = this.add.dom(350, 0).createFromCache('nameform');

    element.addListener('click');

    element.on('click', function a(event) {
      if (event.target.name === 'submitButton') {
        const inputText = this.getChildByName('nameField');

        if (inputText.value !== '') {
          setScore(inputText.value, score).then(() => {
            
            element.scene.scene.start("SceneGameOver");
          }).catch(() => {

          });
        } else {
          this.scene.tweens.add({
            targets: text,
            alpha: 0.2,
            duration: 250,
            ease: 'Power3',
            yoyo: true,
          });
        }
      }
    });

    this.tweens.add({
      targets: element,
      y: 300,
      duration: 3000,
      ease: 'Power3',
    });
  }
}