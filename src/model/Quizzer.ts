class Quizzer {
  #score = 0;

  constructor(public readonly name: string) {}

  getScore(): number {
    return this.#score;
  }
}

export default Quizzer;
