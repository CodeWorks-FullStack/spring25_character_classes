// NOTE import allows us to bring in code from another javascript file
import { CharactersController } from './controllers/CharactersController.js';
import { ExampleController } from './controllers/ExampleController.js';
import whyWouldIDoThis, { name, num } from './ExportExample.js';

const numberFromOtherModule = num
const nameFromOtherMidule = name
const thisIsWeird = whyWouldIDoThis


// NOTE anything added to this class is accessible to the DOM (view)
class App {
  ExampleController = new ExampleController() // ☑️ you can remove this - example only
  coolGuy = "Jake Overall"
  // the DOM now has access to our class object
  // NOTE new is a keyword to construct a class (instantiate)
  charactersController = new CharactersController()
}

// App object is made accessible to the DOM
window['app'] = new App()
