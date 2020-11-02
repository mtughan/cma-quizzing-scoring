import QuestionNumberUtils from './QuestionNumberUtils';
import QuestionResult from './QuestionResult';
import Quizzer from './Quizzer';
import TeamScoreOverview from './TeamScoreOverview';

const q17Index = QuestionNumberUtils.getQuestionIndexForQuestionStr('17');

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

  getScore(atQuestion: number): TeamScoreOverview {
    const overview: TeamScoreOverview = atQuestion <= 1 ? {
      score: this.#onTime ? 20 : 0,
    } : this.getScore(atQuestion - 1);

    const quizzerScores = this.getQuizzers().map((quizzer) => quizzer?.getScore(atQuestion));
    const totalIncorrect = quizzerScores
      .map((score) => score?.incorrect ?? 0)
      .reduce((prev, cur) => prev + cur);
    const totalQuizzersWithCorrectAnswers = quizzerScores
      .map((score) => score && score.correct > 0)
      .filter((hasCorrect) => hasCorrect)
      .length;

    quizzerScores.forEach((score) => {
      if (score?.lastQuestionResult === QuestionResult.CORRECT_ANSWER) {
        overview.score += 20;

        if (score.correct === 1 && totalQuizzersWithCorrectAnswers >= 3) {
          // if this is the first correct answer for this quizzer and we now have 3 or more quizzers
          // who have answered correctly, award a 3rd, 4th, or 5th person bonus!
          overview.score += 10;
        }
      } else if (score?.lastQuestionResult === QuestionResult.BONUS_CORRECT_ANSWER) {
        overview.score += atQuestion >= q17Index ? 10 : 20;
      } else if (score?.lastQuestionResult === QuestionResult.ERROR
          && (score.incorrect > 1 || totalIncorrect >= 3)) {
        overview.score -= 10;
      }
    });

    return overview;
  }
}

export default Team;
