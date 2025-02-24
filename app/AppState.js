// NOTE try to let your tab-complete write these import statements for you
import { Character } from './models/Character.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

// NOTE any member of the ObservableAppState class can be accessed by importing the AppState (declare your global variables here) 🧠
class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  characters = [
    new Character('jerms')
  ]
}

// step on pedal and car goes
export const AppState = createObservableProxy(new ObservableAppState())