// NOTE import allows us to bring in code from another javascript file
import { ExampleController } from './controllers/ExampleController.js';
import whyWouldIDoThis, { name, num } from './ExportExample.js';

const numberFromOtherModule = num
const nameFromOtherMidule = name
const thisIsWeird = whyWouldIDoThis

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

}

window['app'] = new App()


