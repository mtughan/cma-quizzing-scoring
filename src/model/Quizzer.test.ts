import QuestionNumberUtils from './QuestionNumberUtils';
import QuestionResult from './QuestionResult';
import Quizzer from './Quizzer';

const name = 'Michael Tughan';
const q20BIndex = QuestionNumberUtils.getQuestionIndexForQuestionStr('20B');

test('quizzer with name returns that name', () => {
  const quizzer = new Quizzer(name);
  expect(quizzer.name).toBe('Michael Tughan');
});

test('quizzer with no questions answered has score 0', () => {
  const quizzer = new Quizzer(name);
  expect(quizzer.getScore(q20BIndex).score).toBe(0);
});

test('quizzer with 1 question answered correctly has score 20', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(q20BIndex).score).toBe(20);
});

test('quizzer with 2 questions answered correctly has score 40', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(40);
  expect(quizzer.getScore(q20BIndex).score).toBe(40);
});

test('quizzer with 3 questions answered correctly has score 60', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(40);
  expect(quizzer.getScore(3).score).toBe(60);
  expect(quizzer.getScore(q20BIndex).score).toBe(60);
});

test('quizzer with 4 questions answered correctly has score 90', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(4, QuestionResult.CORRECT_ANSWER);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(40);
  expect(quizzer.getScore(3).score).toBe(60);
  expect(quizzer.getScore(4).score).toBe(90);
  expect(quizzer.getScore(q20BIndex).score).toBe(90);
});

test('quizzer with 1 question answered correctly and 1 incorrectly has score 20', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.ERROR);
  quizzer.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(q20BIndex).score).toBe(20);
});

test('quizzer with 2 questions answered correctly and 1 incorrectly has score 40', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(2, QuestionResult.ERROR);
  quizzer.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(q20BIndex).score).toBe(40);
});

test('quizzer with 3 questions answered correctly and 1 incorrectly has score 60', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(3, QuestionResult.ERROR);
  quizzer.addQuestionResult(4, QuestionResult.CORRECT_ANSWER);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(40);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(4).score).toBe(60);
  expect(quizzer.getScore(q20BIndex).score).toBe(60);
});

test('quizzer with 4 questions answered correctly and 1 incorrectly has score 80', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(3, QuestionResult.ERROR);
  quizzer.addQuestionResult(4, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(5, QuestionResult.CORRECT_ANSWER);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(40);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(4).score).toBe(60);
  expect(quizzer.getScore(5).score).toBe(80);
  expect(quizzer.getScore(q20BIndex).score).toBe(80);
});

test('quizzer with 1 question answered incorrectly has score 0', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.ERROR);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(q20BIndex).score).toBe(0);
});

test('quizzer with 1 question answered correctly and 2 incorrectly has score 10', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.ERROR);
  quizzer.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(3, QuestionResult.ERROR);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(10);
  expect(quizzer.getScore(q20BIndex).score).toBe(10);
});

test('quizzer with 2 questions answered correctly and 2 incorrectly has score 30', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(2, QuestionResult.ERROR);
  quizzer.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(4, QuestionResult.ERROR);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(4).score).toBe(30);
  expect(quizzer.getScore(q20BIndex).score).toBe(30);
});

test('quizzer with 3 questions answered correctly and 2 incorrectly has score 50', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(2, QuestionResult.ERROR);
  quizzer.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(4, QuestionResult.ERROR);
  quizzer.addQuestionResult(5, QuestionResult.CORRECT_ANSWER);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(4).score).toBe(30);
  expect(quizzer.getScore(5).score).toBe(50);
  expect(quizzer.getScore(q20BIndex).score).toBe(50);
});

test('quizzer with 4 questions answered correctly and 2 incorrectly has score 70', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(2, QuestionResult.ERROR);
  quizzer.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(4, QuestionResult.ERROR);
  quizzer.addQuestionResult(5, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(6, QuestionResult.CORRECT_ANSWER);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(4).score).toBe(30);
  expect(quizzer.getScore(5).score).toBe(50);
  expect(quizzer.getScore(6).score).toBe(70);
  expect(quizzer.getScore(q20BIndex).score).toBe(70);
});

test('quizzer with 2 questions answered incorrectly has score -10', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.ERROR);
  quizzer.addQuestionResult(2, QuestionResult.ERROR);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(2).score).toBe(-10);
  expect(quizzer.getScore(q20BIndex).score).toBe(-10);
});

test('quizzer with 1 question answered correctly and 3 incorrectly has score 0', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.ERROR);
  quizzer.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(3, QuestionResult.ERROR);
  quizzer.addQuestionResult(4, QuestionResult.ERROR);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(10);
  expect(quizzer.getScore(4).score).toBe(0);
  expect(quizzer.getScore(q20BIndex).score).toBe(0);
});

test('quizzer with 2 questions answered correctly and 3 incorrectly has score 20', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.ERROR);
  quizzer.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(3, QuestionResult.ERROR);
  quizzer.addQuestionResult(4, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(5, QuestionResult.ERROR);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(10);
  expect(quizzer.getScore(4).score).toBe(30);
  expect(quizzer.getScore(5).score).toBe(20);
  expect(quizzer.getScore(q20BIndex).score).toBe(20);
});

test('quizzer with 3 questions answered correctly and 3 incorrectly has score 40', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(2, QuestionResult.ERROR);
  quizzer.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(4, QuestionResult.ERROR);
  quizzer.addQuestionResult(5, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(6, QuestionResult.ERROR);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(4).score).toBe(30);
  expect(quizzer.getScore(5).score).toBe(50);
  expect(quizzer.getScore(6).score).toBe(40);
  expect(quizzer.getScore(q20BIndex).score).toBe(40);
});

test('quizzer who answers 1 bonus question correctly has score 0', () => {
  const quizzer = new Quizzer(name);
  // no individual points are added for bonus questions
  quizzer.addQuestionResult(3, QuestionResult.BONUS_CORRECT_ANSWER);
  expect(quizzer.getScore(q20BIndex).score).toBe(0);
});

test('quizzer who answers 1 bonus question incorrectly has score 0', () => {
  const quizzer = new Quizzer(name);
  // no individual points are deducted for bonus questions
  quizzer.addQuestionResult(3, QuestionResult.BONUS_ERROR);
  expect(quizzer.getScore(q20BIndex).score).toBe(0);
});

test('quizzer who fouls 3 times loses 10 points', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, QuestionResult.FOUL);
  quizzer.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  quizzer.addQuestionResult(3, QuestionResult.FOUL);
  quizzer.addQuestionResult(4, QuestionResult.FOUL);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(20);
  expect(quizzer.getScore(4).score).toBe(10);
  expect(quizzer.getScore(q20BIndex).score).toBe(10);
});

test('quizzer who answers 1 question correctly during overtime has score 0', () => {
  const quizzer = new Quizzer(name);
  // no points are awarded for questions during overtime
  quizzer.addQuestionResult(QuestionNumberUtils.getQuestionIndexForQuestionStr('21'), QuestionResult.CORRECT_ANSWER);
  expect(quizzer.getScore(QuestionNumberUtils.getQuestionIndexForQuestionStr('23B')).score).toBe(0);
});

test('quizzer who answers 1 question incorrectly during overtime has score 0', () => {
  const quizzer = new Quizzer(name);
  // no points are deducted for questions during overtime
  quizzer.addQuestionResult(QuestionNumberUtils.getQuestionIndexForQuestionStr('21'), QuestionResult.ERROR);
  expect(quizzer.getScore(QuestionNumberUtils.getQuestionIndexForQuestionStr('23B')).score).toBe(0);
});
