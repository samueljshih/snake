var Mousetrap = require('mousetrap');

class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 80;
    this.height = 80;
    this.velocityX = 0;
    this.velocityY = 5;
    this.input();
  }

  move() {
    this.y += this.velocityY;
    this.x += this.velocityX;
  }

  input() {
    Mousetrap.bind('up', () => {
      this.velocityX = 0;
      this.velocityY = -5;
    });
    Mousetrap.bind('down', () => {
      this.velocityX = 0;
      this.velocityY = 5;
    });
    Mousetrap.bind('left', () => {
      this.velocityX = -5;
      this.velocityY = 0;
    });
    Mousetrap.bind('right', () => {
      this.velocityX = 5;
      this.velocityY = 0;
    });
  }
}

export default Snake;
