import QuizzerScoreOverview from './QuizzerScoreOverview';

class Quizzer {
  #results: Map<number, boolean> = new Map<number, boolean>();

  constructor(public readonly name: string) {}

  addQuestionResult(question: number, correct: boolean): void {
    this.#results.set(question, correct);
  }

  getScore(atQuestion: number): QuizzerScoreOverview {
    const overview: QuizzerScoreOverview = atQuestion <= 1 ? {
      correct: 0,
      incorrect: 0,
      score: 0,
    } : this.getScore(atQuestion - 1);

    if (this.#results.has(atQuestion)) {
      const result = this.#results.get(atQuestion);
      if (result) {
        overview.correct += 1;
        overview.score += 20;

        if (overview.correct >= 4 && overview.incorrect === 0) {
          overview.score += 10;
        }
      } else {
        overview.incorrect += 1;

        if (atQuestion >= 17 || overview.incorrect > 1) {
          // points are deducted if error points are in effect (question 17 and later)
          // or if the quizzer has made multiple errors
          overview.score -= 10;
        }
      }
    }

    return overview;
  }
}

export default Quizzer;
