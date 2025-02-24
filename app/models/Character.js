
export class Character {
  constructor(characterName, characterEmoji, characterMaxHealth, characterJob) {
    this.name = characterName
    this.emoji = characterEmoji
    this.maxHealth = characterMaxHealth
    this.currentHealth = characterMaxHealth
    this.job = characterJob
  }
  name = ''
  emoji = ''
  currentHealth = 0
  maxHealth = 0
  job = ''
  isAlive = true

  cardHTMLTemplate() {
    return /*html*/`
    <div class="col-md-4">
      <div class="bg-light shadow text-center p-4 mb-3">
      <span class="display-1">${this.emoji}</span>
      <p class="fs-2">${this.name}</p>
      <p class="fs-4">${this.job}</p>
      <p class="fs-4">${this.currentHealth}/${this.maxHealth}</p>
      <button class="btn btn-danger">-</button>
      <button onclick="app.charactersController.makeHealthGoUp()" class="btn btn-success">+</button>
      </div>
    </div>
    `
  }

}