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
     const score = window.localStorage.getItem('score');

      
  this.nameInput = this.add.dom(400, 320).createFromCache('form');
    
     
     
     this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
      this.message = this.add
        .text(400, 250, 'Input Your Name & Hit ENTER', {
          color: '#FFFFFF',
          fontSize: 30,
          fontStyle: 'bold',
        })
        .setOrigin(0.5);
  
      this.returnKey = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.ENTER,
      );
  
      this.returnKey.on('down', () => {
        const name = this.nameInput.getChildByName('name').value;
        setScore(name.value, score);
        this.scene.start('SceneGameOver');
      });
    }
   
   
}