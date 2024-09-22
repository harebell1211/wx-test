import Canvas from './Canvas';
import { default as location } from './location'
import { default as localStorage } from './localStorage'
import { default as navigator } from './navigator'
import { default as XMLHttpRequest } from './XMLHttpRequest'
import { default as WebSocket } from './WebSocket'
import { default as Image } from './Image'
import { default as Audio } from './Audio'
import { default as FileReader } from './FileReader'
import { default as HTMLElement } from './HTMLElement'
import * as WindowProperties from './WindowProperties'
import * as constructor from './constructor';

// 暴露全局的 canvas
const canvas = new Canvas();
const globalSetTimeout = setTimeout;
const globalSetInterval = setInterval;
const globalClearTimeout = clearTimeout;
const globalClearInterval = clearInterval;
const globalRequestAnimationFrame = requestAnimationFrame;
const globalCancelAnimationFrame = cancelAnimationFrame;

const mockWindow = {
    canvas,
    location,
    localStorage,
    navigator,
    XMLHttpRequest,
    WebSocket,
    Image,
    Audio,
    FileReader,
    HTMLElement,
    ...WindowProperties,
    ...constructor,

    setTimeout: globalSetTimeout,
    setInterval: globalSetInterval,
    clearTimeout: globalClearTimeout,
    clearInterval: globalClearInterval,
    requestAnimationFrame: globalRequestAnimationFrame,
    cancelAnimationFrame: globalCancelAnimationFrame,
};
import createDocument from './document';
const document = createDocument(mockWindow);
mockWindow.document = document;

import { initTouchEvent } from './EventIniter';
initTouchEvent(mockWindow)

export default mockWindow;


// export { canvas }
// export { globalSetTimeout as setTimeout }
// export { globalSetInterval as setInterval }
// export { globalClearTimeout as clearTimeout }
// export { globalClearInterval as clearInterval }
// export { globalRequestAnimationFrame as requestAnimationFrame }
// export { globalCancelAnimationFrame as cancelAnimationFrame }
