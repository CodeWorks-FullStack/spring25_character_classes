// NOTE a class is blueprint for an object, which details out the properties/methods that should exist on the class
export class Character {
  // NOTE must supply 4 arguments when constructing a Character class (newing up)
  constructor(characterName, characterEmoji, characterMaxHealth, characterJob) {
    this.name = characterName
    this.emoji = characterEmoji
    this.maxHealth = characterMaxHealth
    this.currentHealth = characterMaxHealth
    this.job = characterJob
  }
  // NOTE properties that exist on a character object (key:value pairs). The constructor will assign value to these properties
  name = ''
  emoji = ''
  currentHealth = 0
  maxHealth = 0
  job = ''

  // NOTE getters are computed properties
  // NOTE getter must return a value and can take in no parameters
  // NOTE whenever the getter is accessed, it will look at the current values on the object and supply an accurate value
  get isAlive() {
    return this.currentHealth > 0 // true or false
  }

  get isAtMaxHealth() {
    return this.currentHealth == this.maxHealth
  }

  // NOTE an interpretation of what our object should display as in the View (DOM)
  get cardHTMLTemplate() {
    // NOTE if you are passing a string value as an argument in your html template, make sure you put '' around the value
    // NOTE can add /*html*/ before the string so that VS Code renders the string like HTML, but is totally optional
    return /*html*/`
    <div class="col-md-4">
      <div class="bg-light shadow text-center p-4 mb-3">
      <span class="display-1">${this.emoji}</span>
      <p class="fs-2 ${this.isAlive ? 'text-success' : 'text-danger'} ">${this.name}</p>
      <p class="fs-4">${this.job}</p>
      <p class="fs-4">${this.currentHealth}/${this.maxHealth}</p>
      <button onclick="app.charactersController.makeHealthGoDown('${this.name}')" class="btn btn-danger" type="button">
        -
      </button>
      <button onclick="app.charactersController.makeHealthGoUp('${this.name}')" class="btn btn-success" type="button">
        +
      </button>
      </div>
    </div>
    `
  }

}