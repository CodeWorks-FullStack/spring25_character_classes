import { AppState } from "../AppState.js"
import { examplesService } from "../services/ExampleService.js"
import { Pop } from "../utils/Pop.js"

// NOTE export allows other modules (js files) to access the exported value
export class ExampleController {
  // NOTE a constructor runs whenever a class object is created (constructed, newed up)
  constructor() {
    console.log('👋Hello from ExampleController')
    console.log('Constructor is running!');

    this.drawMVCard()
  }

  drawMVCard() {
    const mainElm = document.querySelector('main')
    if (mainElm.innerHTML.trim()) return
    mainElm.innerHTML += `
    <div class="card text-center shadow p-2">
      <div class="card-header fw-bold">MVC Template</div>
      <div class="card-body fs-3">
        <i class="mdi mdi-cat text-blue"></i>
        <i class="mdi mdi-arrow-right fs-6"></i>
        <i class="mdi mdi-code-block-braces text-teal"></i>
        <i class="mdi mdi-arrow-right fs-6"></i>
        <i class="mdi mdi-code-braces-box text-pink"></i>
      </div>
      <button onclick="app.ExampleController.exampleAction()" class="btn btn-info">Click Me</button>
      <div id="examples-list" style="max-width: 20ch;"></div>
    </div>
    `
  }

  exampleAction() {
    const emojis = ['🦍', '🦧', '🐖', '🦖', '🐋', '🐅', '🐓', '🐄']
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
    examplesService.addMessage(randomEmoji)
    this.drawExamples()
  }

  drawExamples() {
    let examplesHTML = ''
    AppState.examples.forEach(example => examplesHTML += example.message)
    document.getElementById('examples-list').innerHTML = examplesHTML
  }
}
