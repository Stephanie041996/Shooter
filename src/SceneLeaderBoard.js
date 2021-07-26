
import Button from './Objects/Button';
import {
  getScore,
} from './score.js';

export default class SceneLeaderBoard extends Phaser.Scene {
  constructor() {
    super({key: "SceneLeaderBoard"});
  }


  create() {
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };
    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnRestart"
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on("pointerover", function() {
      this.btnRestart.setTexture("sprBtnRestartHover"); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnRestart.on("pointerout", function() {
      this.setTexture("sprBtnRestart");
    });

    this.btnRestart.on("pointerdown", function() {
      this.btnRestart.setTexture("sprBtnRestartDown");
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on("pointerup", function() {
      this.btnRestart.setTexture("sprBtnRestart");
      this.scene.start("SceneGameOver");
    }, this);
  
    // this.menuButton = new Button(this, 400, 550, 'blueButton1', 'blueButton2', 'Menu', 'Title');
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

// import './phaser';
// import SkyLayer from '../Entities/skyLayer';
// import { fetchScores, gotScores } from './score';
// import menuButton from './content/menuButton.png';
// import menuButtonHover from './content/menuButtonHover.png';
// import { appAlert } from './utils';

// export default class SceneLeaderBoard extends Phaser.Scene {
//   constructor() {
//     super({ key: 'SceneLeaderBoard' });
//   }

//   preload() {
//     this.load.image('menuButton', menuButton);
//     this.load.image('menuButtonHover', menuButtonHover);

//     fetchScores(gotScores, appAlert, this);
//   }

// //   renderBackground() {
// //     this.backgrounds = [];
// //     for (let i = 0; i < 5; i += 1) {
// //       const bg = new SkyLayer(this, 'sky1', i * 10);
// //       this.backgrounds.push(bg);
// //     }
// //   }

//   renderTitle() {
//     const title = this.add.text(this.game.config.width * 0.5, 50, 'Leaders Board', {
//       fontFamily: 'monospace',
//       fontSize: 32,
//       fontStyle: 'bold',
//       color: '#ffffff',
//       align: 'center',
//     });
//     title.setOrigin(0.5);
//   }

//   renderMenuButton() {
//     const btnMenu = this.add.sprite(
//       this.game.config.width * 0.5,
//       (this.game.config.height * 0.9),
//       'menuButton',
//     );
//     btnMenu.setInteractive();

//     btnMenu.on('pointerover', () => {
//       btnMenu.setTexture('menuButtonHover');
//     }, this);

//     btnMenu.on('pointerout', () => {
//       btnMenu.setTexture('menuButton');
//     });

//     btnMenu.on('pointerup', () => {
//       const inputDiv = document.getElementById('inputDiv');
//       if (inputDiv) {
//         inputDiv.remove();
//       }
//       this.scene.start('SceneMain');
//     }, this);
//   }

//   create() {
  
//     this.renderTitle();
//     this.renderMenuButton();
//   }

// //   update() {
// //     for (let i = 0; i < this.backgrounds.length; i += 1) {
// //       this.backgrounds[i].update();
// //     }
// //   }
// }