import { createRenderer } from 'vue-server-renderer'

export default class Renderer {
    constructor() {
      this.renderer = createRenderer()
    }
}