import QuestionNumberUtils from './QuestionNumberUtils';
import QuestionResult from './QuestionResult';
import QuizzerScoreOverview from './QuizzerScoreOverview';

const overtimeIndex = QuestionNumberUtils.getQuestionIndexForQuestionStr('21');

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
      fouls: 0,
      score: 0,
    } : this.getScore(atQuestion - 1);

    if (this.#results.has(atQuestion)) {
      const result = this.#results.get(atQuestion);
      overview.lastQuestionResult = result;
      if (result === QuestionResult.CORRECT_ANSWER && atQuestion < overtimeIndex) {
        overview.correct += 1;
        overview.score += 20;

        if (overview.correct >= 4 && overview.incorrect === 0) {
          overview.score += 10;
        }
      } else if (result === QuestionResult.ERROR && atQuestion < overtimeIndex) {
        overview.incorrect += 1;

        if (overview.incorrect > 1) {
          overview.score -= 10;
        }
      } else if (result === QuestionResult.FOUL) {
        overview.fouls += 1;

        if (overview.fouls >= 3) {
          overview.score -= 10;
        }
      }
    } else {
      overview.lastQuestionResult = undefined;
    }

    return overview;
  }
}

export default Quizzer;
