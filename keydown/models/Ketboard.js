import {Shortcut} from "./Shortcut";


export class Keyboard {
  constructor(engine) {
    this.engine = engine
    this.shortcuts = engine.props.shortcuts || []
    this.sequence = []
  }

  isKeyDown(code) {
    return this.keyDown = code
  }

  includes(key) {
    return this.sequence.some(code => Shortcut.matchCode(code, key))
  }

  excludes(key) {
    return this.sequence.filter(code => !Shortcut.matchCode(code, key))
  }

  addKeyCode(key) {
    if (!this.includes(key)) {
      this.sequence.push(key)
    }
  }

  removeKey(key) {
    if (this.includes(key)) {
      this.excludes(key)
    }
  }

  handleKeyboard(event, context) {
    if (event.eventType === 'keydown') {
      this.keyDown = event.data

      this.handle
    }
  }
}
