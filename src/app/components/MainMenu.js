export class MainMenu {
  constructor(id, content, gameModeIndex) {
    this.gameModeIndex = gameModeIndex;
    this.render(id, content);
  }

  renderContent(id, content) {
    const mainMenuContainer = document.querySelector(`#${id}`);
    mainMenuContainer.classList.add('mainMenu');
    for (let i = 0; i < content.length; i++) {
      let modeContainer = document.createElement('div');
      modeContainer.appendChild(document.createElement('button'));
      modeContainer.appendChild(document.createElement('div'));
      mainMenuContainer.appendChild(modeContainer);
    }
    const underscores = document.querySelectorAll('.mainMenu >div > div');
    const btns = document.querySelectorAll('.mainMenu > div > button');

    btns.forEach((btn, index) => {
      btn.textContent = content[index];
      const removeClasses = () => {
        underscores.forEach(un => un.classList.remove('mainMenuActive'));
        btns.forEach(btn => btn.classList.remove('black'));
      };
      const addClasses = () => {
        underscores[index].classList.add('mainMenuActive');
        btns[index].classList.add('black');
      };

      const btnIndex = () => {
        removeClasses();
        addClasses();
        this.gameMode(index);
      };
      btn.addEventListener('click', btnIndex);
    });

  }
  gameMode(index) {
    this.gameModeIndex = index;
  };
  render(id, content) {
    this.renderContent(id, content);
  }
}

