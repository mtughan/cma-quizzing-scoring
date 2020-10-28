import Quizzer from './Quizzer';

test('quizzer with name returns that name', () => {
  const quizzer = new Quizzer('Michael Tughan');
  expect(quizzer.name).toBe('Michael Tughan');
});

test('quizzer with no questions answered has score 0', () => {
  const quizzer = new Quizzer('Michael Tughan');
  expect(quizzer.getScore()).toBe(0);
});
