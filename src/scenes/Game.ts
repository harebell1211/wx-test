import { Scene } from 'phaser';

export class Game extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text: Phaser.GameObjects.Text;

    constructor() {
        console.log('game');
        super('Game');
    }

    create() {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        this.background = this.add.image(0, 0, 'background');
        this.background.setAlpha(0.5);

        this.msg_text = this.add.text(
            0,
            0,
            'Make something fun!\nand share it with us:\nsupport@phaser.io',
            {
                fontFamily: 'Arial Black',
                fontSize: 38,
                color: '#ffffff',
                stroke: '#000000',
                strokeThickness: 8,
                align: 'center',
            }
        );
        this.msg_text.setOrigin(0.5);
        console.log(this.input, this.input.manager, this.input.manager.touch);
        this.input.once('pointerdown', () => {
            this.scene.start('GameOver');
            console.log('clicked');
        });
        // this.input.manager.touch.onTouchStart(() => {
        //     this.scene.start('GameOver');
        //     console.log('clicked');
        // });
    }
}
