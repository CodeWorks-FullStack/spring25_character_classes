
// NOTE the user only has access to what is defined on our Controller classes
export class CharactersController {
  // NOTE will run when CharactersController class is constructed (happens in App class)
  constructor() {
    console.log('You just created a new Characters Controller!');
    console.log('Great job buddy!');
  }

  sayWhatUp() {
    let name = 'jerms'
    console.log('What up ' + name);
  }
}