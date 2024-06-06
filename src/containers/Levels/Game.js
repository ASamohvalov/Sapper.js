export class Game {
  
  constructor(numberOfCheckboxes, height, width) {
    this.board = [];
    this.numberOfCheckboxes = numberOfCheckboxes;
    this.height = height;
    this.width = width;
    this.generateBoard();
  }

  generateBoard() {
    const checkBoxes = this.generateRandomCheckboxes();
    for (let i = 0; i < this.height * this.width; i++) {
      if (checkBoxes.includes(i)) {
        this.board.push("&");
        continue;
      }
      let index = i + 1;
      let count = 0;
      if (checkBoxes.includes(index)) {
        count++;
      }
      index += this.width;
      if (checkBoxes.includes(index)) {
        count++;
      }
      index--;
      if (checkBoxes.includes(index)) {
        count++;
      }
      index--;
      if (checkBoxes.includes(index)) {
        count++;
      }
      index -= this.width;
      if (checkBoxes.includes(index)) {
        count++;
      }
      index -= this.width;
      if (checkBoxes.includes(index)) {
        count++;
      }
      index++;
      if (checkBoxes.includes(index)) {
        count++;
      }
      index++;
      if (checkBoxes.includes(index)) {
        count++;
      }
      this.board.push(count);
    }
  }

  generateRandomCheckboxes() {
    let checkBoxes = [];
    while (checkBoxes.length < this.numberOfCheckboxes) {
      const randomNum = Math.floor(Math.random() * this.height * this.width);
      if (!checkBoxes.includes(randomNum)) {
        checkBoxes.push(randomNum);
      }
    }
    return checkBoxes;
  }

  getboard() {
    return this.board;
  }
}