import { Game as MainGame } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { Game, Types } from 'phaser';

const canvas = document.querySelector('canvas');

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: Phaser.CANVAS,
    canvas,
    scene: [MainGame, GameOver],
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
};

export function createGame() {
    new Game(config);
}
