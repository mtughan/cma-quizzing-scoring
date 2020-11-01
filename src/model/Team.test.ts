import QuestionNumberUtils from './QuestionNumberUtils';
import Quizzer from './Quizzer';
import Team from './Team';

const q20BIndex = QuestionNumberUtils.getQuestionIndexForQuestionStr('20B');

test('team that is not on time has score 0 to start', () => {
  const team = new Team();
  team.setOnTime(false);

  expect(team.getScore(q20BIndex).score).toBe(0);
});

test('team that is on time has score 20 to start', () => {
  const team = new Team();
  team.setOnTime(true);

  expect(team.getScore(q20BIndex).score).toBe(20);
});

test('quizzers can be added to a team', () => {
  const team = new Team();
  team.setQuizzer(0, new Quizzer('Quizzer 1'));
  team.setQuizzer(3, new Quizzer('Quizzer 2'));

  const quizzers = team.getQuizzers();
  expect(quizzers).toHaveLength(5);
  expect(quizzers[0]?.name).toBe('Quizzer 1');
  expect(quizzers[1]).toBeNull();
  expect(quizzers[2]).toBeNull();
  expect(quizzers[3]?.name).toBe('Quizzer 2');
  expect(quizzers[4]).toBeNull();
});

test('quizzers in invalid seats are rejected', () => {
  const team = new Team();
  const quizzer = new Quizzer('Quizzer');

  expect(() => team.setQuizzer(-1, quizzer)).toThrow();
  expect(() => team.setQuizzer(5, quizzer)).toThrow();
  expect(() => team.setQuizzer(NaN, quizzer)).toThrow();
});
