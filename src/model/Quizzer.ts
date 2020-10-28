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

    let score = correct * 20;
    if (correct >= 4 && incorrect === 0) {
      score += 10;
    } else if (incorrect > 1) {
      // penalize for more than one error
      score -= (incorrect - 1) * 10;
    }
    return score;
  }
}

export default Quizzer;
