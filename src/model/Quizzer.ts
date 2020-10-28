class Quizzer {
  #results: boolean[] = [];

  constructor(public readonly name: string) {}

  addQuestionResult(correct: boolean): void {
    this.#results.push(correct);
  }

  getScore(): number {
    let correct = 0;
    let incorrect = 0;
    this.#results.forEach((result) => {
      if (result) {
        correct += 1;
      } else {
        incorrect += 1;
      }
    });

    let bonus = 0;
    if (correct >= 4 && incorrect === 0) {
      bonus = 10;
    }
    return correct * 20 + bonus;
  }
}

export default Quizzer;
