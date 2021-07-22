import sprBtnPlay from './content/sprBtnPlay.png';
import sprBtnPlayHover from './content/sprBtnPlay.png';
import sprBtnPlayDown from './content/sprBtnPlay.png';
import sprBtnRestart from './content/sprBtnPlay.png';
import sprBtnRestartHover from './content/sprBtnPlay.png';
import sprBtnRestartDown from './content/sprBtnPlay.png';
import sndBtnOver from './content/sprBtnPlay.png';
import sndBtnDown from './content/sprBtnPlay.png';
export default class SceneMainMenu extends Phaser.Scene {
    constructor() {
      super({ key: "SceneMainMenu" });
    }
    preload(){
      this.load.image("sprBtnPlay", sprBtnPlay);
this.load.image("sprBtnPlayHover", sprBtnPlayHover);
this.load.image("sprBtnPlayDown", sprBtnPlayDown);
this.load.image("sprBtnRestart", sprBtnRestart);
this.load.image("sprBtnRestartHover", sprBtnRestartHover);
this.load.image("sprBtnRestartDown", sprBtnRestartDown);

this.load.audio("sndBtnOver", sndBtnOver);
this.load.audio("sndBtnDown", sndBtnDown);
    }
  
    create() {
      this.scene.start("SceneMain");
    }
  }