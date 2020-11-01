import Quizzer from './Quizzer';

class Team {
  private static readonly MAX_QUIZZERS = 5;

  #onTime = false;

  #quizzers: Map<number, Quizzer> = new Map<number, Quizzer>();

  setOnTime(onTime: boolean): void {
    this.#onTime = onTime;
  }

  setQuizzer(index: number, quizzer: Quizzer): void {
    if (index < 0 || index >= Team.MAX_QUIZZERS || Number.isNaN(index)) { // max 5 quizzers
      throw new Error('index must be between 0 and 4!');
    }
    this.#quizzers.set(index, quizzer);
  }

  getQuizzers(): (Quizzer | null)[] {
    const quizzers: (Quizzer | null)[] = [];
    for (let i = 0; i < Team.MAX_QUIZZERS; i += 1) {
      quizzers.push(this.#quizzers.get(i) ?? null);
    }
    return quizzers;
  }

  getScore(): number {
    let score = 0;

    if (this.#onTime) {
      score += 20;
    }

    return score;
  }
}

export default Team;
