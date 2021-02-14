import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import {Die} from "./die";

class MyGame extends Phaser.Scene {
    constructor () {
        super();
    }

    preload ()
    {
        this.load.image('logo', logoImg);
        const die = new Die();
        const dieValue = die.roll();
    }
      
    create ()
    {
        const logo = this.add.image(600, 150, 'logo');
      
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
