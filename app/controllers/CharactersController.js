import { AppState } from "../AppState.js";
import { charactersService } from "../services/CharactersService.js";

// NOTE controller handles drawing and allows user to perform actions
// NOTE the user only has access to what is defined on our Controller classes
export class CharactersController {
  // NOTE will run when CharactersController class is constructed (happens in App class)
  constructor() {
    // NOTE our controller constructors generally run on page load
    console.log('You just created a new Characters Controller!');
    console.log('Great job buddy!');
    const characters = AppState.characters
    console.log('these are the characters from the appstate', characters);
    this.drawCharacterCards()
  }

  // NOTE methods are function that exist on an object
  sayWhatUp() {
    let name = 'jerms'
    console.log('What up ' + name);
  }
  drawCharacterCards() {
    const characters = AppState.characters

    // placeholder for HTML
    let innerHTMLcontent = ''

    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];

      // NOTE adds HTML to our placeholder
      innerHTMLcontent += character.cardHTMLTemplate
    }
    const characterCardsElem = document.getElementById('characterCardsSection')
    characterCardsElem.innerHTML = innerHTMLcontent
  }

  makeHealthGoUp(characterName) {
    console.log('health is going up for ', characterName);
    // NOTE if you need to make modifications to data, your service layer should handle that (separation of concerns)
    charactersService.increaseCharacterHealth(characterName)
    this.drawCharacterCards()
  }

  makeHealthGoDown(characterName) {
    charactersService.decreaseCharacterHealth(characterName)
    this.drawCharacterCards()
  }
}