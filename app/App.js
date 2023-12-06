import { router } from './router-config.js';

class App {

  router = router

  banana = 'sandwich'

}


const app = new App()
// @ts-ignore
window.app = app
