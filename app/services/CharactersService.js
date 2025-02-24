import { AppState } from "../AppState.js";

// NOTE you should not export your service class definitions
// NOTE business logic and modification of data in the AppState should occur in the service layer
class CharactersService {
  increaseCharacterHealth(characterName) {
    console.log('character health is going up!', characterName);
    const characters = AppState.characters
    const foundCharacter = characters.find(character => character.name == characterName)
    foundCharacter.currentHealth++
    console.log('here they are!', foundCharacter);
    if (foundCharacter.currentHealth > foundCharacter.maxHealth) {
      foundCharacter.currentHealth = foundCharacter.maxHealth
    }
  }

  decreaseCharacterHealth(characterName) {
    const characters = AppState.characters
    const foundCharacter = characters.find(character => character.name == characterName)
    foundCharacter.currentHealth--
    if (foundCharacter.currentHealth < 0) {
      foundCharacter.currentHealth = 0
    }
  }

}

// NOTE singleton (you only create a single instance of a class that all other modules interact with)
// NOTE other modules cannot alter the service object
// NOTE all waiters use the same kitchen
export const charactersService = new CharactersService()