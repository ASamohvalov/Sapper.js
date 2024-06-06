class EasyGame {
  public readonly NUMBER_OF_CHECHBOXES: number = 10;
  public readonly HEIGHT: number = 6;
  public readonly WIDTH: number = 10;

  private board: any[] = [];

  public generateBoard(): void {
    const checkBoxes: number[] = this.generateRandomCheckboxes();

    for (let i: number = 0; i < this.HEIGHT * this.WIDTH; i++) {
      if (checkBoxes.includes(i)) {
        this.board.push("&");
        continue;
      }

      let index: number = i + 1;
      let count: number = 0;
      if (checkBoxes.includes(index)) {
        count++;
      }
      index += this.WIDTH;
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
      index -= this.WIDTH;
      if (checkBoxes.includes(index)) {
        count++;
      }
      index -= this.WIDTH;
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

  private generateRandomCheckboxes(): number[] {
    let checkBoxes: number[] = [];
    while (checkBoxes.length < this.NUMBER_OF_CHECHBOXES) {
      const randomNum = Math.floor(Math.random() * this.HEIGHT * this.WIDTH);
      if (!checkBoxes.includes(randomNum)) {
        checkBoxes.push(randomNum);
      }
    }

    return checkBoxes;
  }
}