import { AppState } from "../AppState.js";

// NOTE the user only has access to what is defined on our Controller classes
export class CharactersController {
  // NOTE will run when CharactersController class is constructed (happens in App class)
  constructor() {
    console.log('You just created a new Characters Controller!');
    console.log('Great job buddy!');
    const characters = AppState.characters
    console.log('these are the characters from the appstate', characters);
  }

  sayWhatUp() {
    let name = 'jerms'
    console.log('What up ' + name);
  }
}