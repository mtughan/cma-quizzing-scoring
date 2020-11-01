import QuestionResult from './QuestionResult';

interface QuizzerScoreOverview {
  correct: number;
  incorrect: number;
  fouls: number;
  score: number;
  lastQuestionResult?: QuestionResult;
}

export default QuizzerScoreOverview;
