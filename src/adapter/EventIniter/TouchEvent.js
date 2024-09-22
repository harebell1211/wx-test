import createDocument from '../document'
import { noop } from '../util/'

class TouchEvent {
  target = window.canvas
  currentTarget = window.canvas
  touches = []
  targetTouches = []
  changedTouches = []
  preventDefault = noop
  stopPropagation = noop
  constructor(type) {
    this.type = type
  }
}

function touchEventHandlerFactory(type, window) {
  const document = createDocument(window);
  return (event) => {
    const touchEvent = new TouchEvent(type)

    touchEvent.touches = event.touches
    touchEvent.targetTouches = Array.prototype.slice.call(event.touches)
    touchEvent.changedTouches = event.changedTouches
    touchEvent.timeStamp = event.timeStamp
    document.dispatchEvent(touchEvent)
  }
}

export function initTouchEvent(window) {
  wx.onTouchStart(touchEventHandlerFactory('touchstart', window))
  wx.onTouchMove(touchEventHandlerFactory('touchmove', window))
  wx.onTouchEnd(touchEventHandlerFactory('touchend', window))
  wx.onTouchCancel(touchEventHandlerFactory('touchcancel', window))
}


