import QuestionNumberUtils from './QuestionNumberUtils';
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
  quizzer.addQuestionResult(1, true);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(q20BIndex).score).toBe(20);
});

test('quizzer with 2 questions answered correctly has score 40', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, true);
  quizzer.addQuestionResult(2, true);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(40);
  expect(quizzer.getScore(q20BIndex).score).toBe(40);
});

test('quizzer with 3 questions answered correctly has score 60', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, true);
  quizzer.addQuestionResult(2, true);
  quizzer.addQuestionResult(3, true);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(40);
  expect(quizzer.getScore(3).score).toBe(60);
  expect(quizzer.getScore(q20BIndex).score).toBe(60);
});

test('quizzer with 4 questions answered correctly has score 90', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, true);
  quizzer.addQuestionResult(2, true);
  quizzer.addQuestionResult(3, true);
  quizzer.addQuestionResult(4, true);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(40);
  expect(quizzer.getScore(3).score).toBe(60);
  expect(quizzer.getScore(4).score).toBe(90);
  expect(quizzer.getScore(q20BIndex).score).toBe(90);
});

test('quizzer with 1 question answered correctly and 1 incorrectly has score 20', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, false);
  quizzer.addQuestionResult(2, true);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(q20BIndex).score).toBe(20);
});

test('quizzer with 2 questions answered correctly and 1 incorrectly has score 40', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, true);
  quizzer.addQuestionResult(2, false);
  quizzer.addQuestionResult(3, true);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(q20BIndex).score).toBe(40);
});

test('quizzer with 3 questions answered correctly and 1 incorrectly has score 60', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, true);
  quizzer.addQuestionResult(2, true);
  quizzer.addQuestionResult(3, false);
  quizzer.addQuestionResult(4, true);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(40);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(4).score).toBe(60);
  expect(quizzer.getScore(q20BIndex).score).toBe(60);
});

test('quizzer with 4 questions answered correctly and 1 incorrectly has score 80', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, true);
  quizzer.addQuestionResult(2, true);
  quizzer.addQuestionResult(3, false);
  quizzer.addQuestionResult(4, true);
  quizzer.addQuestionResult(5, true);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(40);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(4).score).toBe(60);
  expect(quizzer.getScore(5).score).toBe(80);
  expect(quizzer.getScore(q20BIndex).score).toBe(80);
});

test('quizzer with 1 question answered incorrectly has score 0', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, false);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(q20BIndex).score).toBe(0);
});

test('quizzer with 1 question answered correctly and 2 incorrectly has score 10', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, false);
  quizzer.addQuestionResult(2, true);
  quizzer.addQuestionResult(3, false);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(10);
  expect(quizzer.getScore(q20BIndex).score).toBe(10);
});

test('quizzer with 2 questions answered correctly and 2 incorrectly has score 30', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, true);
  quizzer.addQuestionResult(2, false);
  quizzer.addQuestionResult(3, true);
  quizzer.addQuestionResult(4, false);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(4).score).toBe(30);
  expect(quizzer.getScore(q20BIndex).score).toBe(30);
});

test('quizzer with 3 questions answered correctly and 2 incorrectly has score 50', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, true);
  quizzer.addQuestionResult(2, false);
  quizzer.addQuestionResult(3, true);
  quizzer.addQuestionResult(4, false);
  quizzer.addQuestionResult(5, true);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(4).score).toBe(30);
  expect(quizzer.getScore(5).score).toBe(50);
  expect(quizzer.getScore(q20BIndex).score).toBe(50);
});

test('quizzer with 4 questions answered correctly and 2 incorrectly has score 70', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, true);
  quizzer.addQuestionResult(2, false);
  quizzer.addQuestionResult(3, true);
  quizzer.addQuestionResult(4, false);
  quizzer.addQuestionResult(5, true);
  quizzer.addQuestionResult(6, true);
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
  quizzer.addQuestionResult(1, false);
  quizzer.addQuestionResult(2, false);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(2).score).toBe(-10);
  expect(quizzer.getScore(q20BIndex).score).toBe(-10);
});

test('quizzer with 1 question answered correctly and 3 incorrectly has score 0', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, false);
  quizzer.addQuestionResult(2, true);
  quizzer.addQuestionResult(3, false);
  quizzer.addQuestionResult(4, false);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(10);
  expect(quizzer.getScore(4).score).toBe(0);
  expect(quizzer.getScore(q20BIndex).score).toBe(0);
});

test('quizzer with 2 questions answered correctly and 3 incorrectly has score 20', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, false);
  quizzer.addQuestionResult(2, true);
  quizzer.addQuestionResult(3, false);
  quizzer.addQuestionResult(4, true);
  quizzer.addQuestionResult(5, false);
  expect(quizzer.getScore(1).score).toBe(0);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(10);
  expect(quizzer.getScore(4).score).toBe(30);
  expect(quizzer.getScore(5).score).toBe(20);
  expect(quizzer.getScore(q20BIndex).score).toBe(20);
});

test('quizzer with 3 questions answered correctly and 3 incorrectly has score 40', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, true);
  quizzer.addQuestionResult(2, false);
  quizzer.addQuestionResult(3, true);
  quizzer.addQuestionResult(4, false);
  quizzer.addQuestionResult(5, true);
  quizzer.addQuestionResult(6, false);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(2).score).toBe(20);
  expect(quizzer.getScore(3).score).toBe(40);
  expect(quizzer.getScore(4).score).toBe(30);
  expect(quizzer.getScore(5).score).toBe(50);
  expect(quizzer.getScore(6).score).toBe(40);
  expect(quizzer.getScore(q20BIndex).score).toBe(40);
});

test('quizzer with 1 question answered incorrectly on question 16 has score 0', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(QuestionNumberUtils.getQuestionIndexForQuestionStr('16'), false);
  expect(quizzer.getScore(QuestionNumberUtils.getQuestionIndexForQuestionStr('16')).score).toBe(0);
  expect(quizzer.getScore(q20BIndex).score).toBe(0);
});

test('quizzer with 1 question answered incorrectly on question 17 has score -10', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(QuestionNumberUtils.getQuestionIndexForQuestionStr('17'), false);
  expect(quizzer.getScore(QuestionNumberUtils.getQuestionIndexForQuestionStr('17')).score).toBe(-10);
  expect(quizzer.getScore(q20BIndex).score).toBe(-10);
});

test('quizzer with 1 question answered correctly and 2 incorrectly (1 with error points in effect) has score 10', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(1, true);
  quizzer.addQuestionResult(QuestionNumberUtils.getQuestionIndexForQuestionStr('16'), false);
  // this incorrect answer should only incur a 10 point penalty, not 20,
  // even though it's while error points are in effect and it's the quizzer's 2nd error
  quizzer.addQuestionResult(QuestionNumberUtils.getQuestionIndexForQuestionStr('19'), false);
  expect(quizzer.getScore(1).score).toBe(20);
  expect(quizzer.getScore(QuestionNumberUtils.getQuestionIndexForQuestionStr('16')).score).toBe(20);
  expect(quizzer.getScore(QuestionNumberUtils.getQuestionIndexForQuestionStr('19')).score).toBe(10);
  expect(quizzer.getScore(q20BIndex).score).toBe(10);
});
