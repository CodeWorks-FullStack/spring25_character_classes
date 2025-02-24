import { AppState } from "../AppState.js";
import { charactersService } from "../services/CharactersService.js";

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

  sayWhatUp() {
    let name = 'jerms'
    console.log('What up ' + name);
  }

  drawCharacterCards() {
    const characters = AppState.characters

    let innerHTMLcontent = ''

    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
      innerHTMLcontent += character.cardHTMLTemplate()
    }
    const characterCardsElem = document.getElementById('charcterCardsSection')
    characterCardsElem.innerHTML = innerHTMLcontent
  }

  makeHealthGoUp() {
    console.log('health is going up!');
    charactersService.increaseCharacterHealth()
  }
}