// 5. Slot Machine
class SlotMachine {
  contador: number;
  constructor () {
    this.contador = 0;
  }

  play() {
    let ruleta1 = Math.random() < 0.5;
    let ruleta2 = Math.random() < 0.5;
    let ruleta3 = Math.random() < 0.5;

    this.contador ++;


    if (ruleta1 && ruleta2 && ruleta3) {
      console.log(`Congratulations!!!. You won ${this.contador} coins!!`)
      this.contador = 0;
    } else {
      console.log("Good luck next time!!")
    }
  }
}

const machine1 = new SlotMachine();

console.log("************** DELIVERABLE 05 *********************");
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
