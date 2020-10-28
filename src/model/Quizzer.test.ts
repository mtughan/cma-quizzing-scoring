import Quizzer from './Quizzer';

const name = 'Michael Tughan';

test('quizzer with name returns that name', () => {
  const quizzer = new Quizzer(name);
  expect(quizzer.name).toBe('Michael Tughan');
});

test('quizzer with no questions answered has score 0', () => {
  const quizzer = new Quizzer(name);
  expect(quizzer.getScore()).toBe(0);
});

test('quizzer with 1 question answered correctly has score 20', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(true);
  expect(quizzer.getScore()).toBe(20);
});

test('quizzer with 2 questions answered correctly has score 40', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(true);
  expect(quizzer.getScore()).toBe(40);
});

test('quizzer with 3 questions answered correctly has score 60', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(true);
  expect(quizzer.getScore()).toBe(60);
});

test('quizzer with 4 questions answered correctly has score 90', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(true);
  expect(quizzer.getScore()).toBe(90);
});

test('quizzer with 1 question answered correctly and 1 incorrectly has score 20', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(false);
  quizzer.addQuestionResult(true);
  expect(quizzer.getScore()).toBe(20);
});

test('quizzer with 2 questions answered correctly and 1 incorrectly has score 40', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(false);
  quizzer.addQuestionResult(true);
  expect(quizzer.getScore()).toBe(40);
});

test('quizzer with 3 questions answered correctly and 1 incorrectly has score 60', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(false);
  quizzer.addQuestionResult(true);
  expect(quizzer.getScore()).toBe(60);
});

test('quizzer with 4 questions answered correctly and 1 incorrectly has score 80', () => {
  const quizzer = new Quizzer(name);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(false);
  quizzer.addQuestionResult(true);
  quizzer.addQuestionResult(true);
  expect(quizzer.getScore()).toBe(80);
});
