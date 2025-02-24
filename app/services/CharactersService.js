import { AppState } from "../AppState.js";

// NOTE you should not export your service class definitions
class CharactersService {
  increaseCharacterHealth(characterName) {
    console.log('character health is going up!', characterName);
    const characters = AppState.characters
    const foundCharacter = characters.find(character => character.name == characterName)
    foundCharacter.currentHealth++
    console.log('here they are!', foundCharacter);
  }

  decreaseCharacterHealth(characterName) {
    const characters = AppState.characters
    const foundCharacter = characters.find(character => character.name == characterName)
    foundCharacter.currentHealth--
  }

}

// NOTE singleton (you only create a single instance of a class that all other modules interact with)
// NOTE other modules cannot alter the service object
// NOTE all waiters use the same kitchen
export const charactersService = new CharactersService()