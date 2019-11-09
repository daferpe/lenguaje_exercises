// --- EJERCICIO 5.Slot Machine

const getRandomBoolean = () => Math.random() >= 0.5;
class SlothMachine {
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    if(getRandomBoolean() && getRandomBoolean() && getRandomBoolean()) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    }
    else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();