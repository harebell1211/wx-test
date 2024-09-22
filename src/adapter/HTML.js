import HTMLElement from './HTMLElement'
import { innerWidth, innerHeight } from './WindowProperties'

export default class HTML extends HTMLElement {
    constructor() {
        super('html')
    }
    get clientHeight() {
        return innerHeight
    }
    get clientWidth() {
        return innerWidth
    }
    //phaser会根据有无ontouchstart 判断是否开始touch事件监听
    ontouchstart() {
        return null
    }
}