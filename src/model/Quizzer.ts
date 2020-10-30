import QuestionNumberUtils from './QuestionNumberUtils';
import QuestionResult from './QuestionResult';
import QuizzerScoreOverview from './QuizzerScoreOverview';

const q17Index = QuestionNumberUtils.getQuestionIndexForQuestionStr('17');

class Quizzer {
  #results: Map<number, QuestionResult> = new Map<number, QuestionResult>();

  constructor(public readonly name: string) {}

  addQuestionResult(question: number, result: QuestionResult): void {
    this.#results.set(question, result);
  }

  getScore(atQuestion: number): QuizzerScoreOverview {
    const overview: QuizzerScoreOverview = atQuestion <= 1 ? {
      correct: 0,
      incorrect: 0,
      score: 0,
    } : this.getScore(atQuestion - 1);

    if (this.#results.has(atQuestion)) {
      const result = this.#results.get(atQuestion);
      if (result === QuestionResult.CORRECT_ANSWER) {
        overview.correct += 1;
        overview.score += 20;

        if (overview.correct >= 4 && overview.incorrect === 0) {
          overview.score += 10;
        }
      } else { // result === QuestionResult.ERROR
        overview.incorrect += 1;

        if (atQuestion >= q17Index || overview.incorrect > 1) {
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
