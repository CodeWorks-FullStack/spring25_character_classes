
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

}