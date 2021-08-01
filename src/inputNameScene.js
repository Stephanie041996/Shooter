/* eslint-disable import/extensions */
import Phaser from 'phaser';
// import form from './assets/form.html';
import {
  setScore,
} from './score';


export default class InputNameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'InputNameScene' });
  }
  preload() {
    this.load.html('form', 'assets/form.html');
  }
  create() {
     const score = localStorage.getItem('score');

      
  this.nameInput = this.add.dom(400, 320).createFromCache('form');
     this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
      this.message = this.add
        .text(400, 250, 'Enter Your Name & Hit ENTER', {
          color: '#FFFFFF',
          fontSize: 30,
          fontStyle: 'bold',
        })
        .setOrigin(0.5);
  
      this.returnKey = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.ENTER,
      );
  
      this.returnKey.on('down', () => {
        const inputText = this.nameInput.getChildByName('name').value;

        if (inputText !== '') {
          setScore(inputText.value, score).then(() => {
            this.scene.start('SceneGameOver');
          }).catch(() => {

          });
        } 
        // setScore(name.value, score);
        // this.scene.start('SceneGameOver');
      });
    }
   
   
}