class Quizzer {
  #results: boolean[] = [];

  constructor(public readonly name: string) {}

  addQuestionResult(correct: boolean): void {
    this.#results.push(correct);
  }

  getScore(): number {
    let correct = 0;
    this.#results.forEach((result) => {
      if (result) {
        correct += 1;
      }
    });

    return correct * 20;
  }
}

export default Quizzer;
