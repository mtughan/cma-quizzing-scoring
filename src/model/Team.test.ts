import QuestionNumberUtils from './QuestionNumberUtils';
import QuestionResult from './QuestionResult';
import Quizzer from './Quizzer';
import Team from './Team';

const q20BIndex = QuestionNumberUtils.getQuestionIndexForQuestionStr('20B');

function getFullTeam(onTime = true): Team {
  const team = new Team();
  team.setOnTime(onTime);
  team.setQuizzer(0, new Quizzer('Quizzer 1'));
  team.setQuizzer(1, new Quizzer('Quizzer 2'));
  team.setQuizzer(2, new Quizzer('Quizzer 3'));
  team.setQuizzer(3, new Quizzer('Quizzer 4'));
  team.setQuizzer(4, new Quizzer('Quizzer 5'));
  return team;
}

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

test('team that is on time and has 1 correct answer from a quizzer has score 40', () => {
  const team = getFullTeam();
  team.getQuizzers()[0]?.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);

  expect(team.getScore(1).score).toBe(40);
  expect(team.getScore(q20BIndex).score).toBe(40);
});

test('team that is on time and has 2 correct answers from a quizzer has score 60', () => {
  const team = getFullTeam();
  team.getQuizzers()[0]?.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);

  expect(team.getScore(1).score).toBe(40);
  expect(team.getScore(2).score).toBe(60);
  expect(team.getScore(q20BIndex).score).toBe(60);
});

test('team that is on time and has 3 correct answers from a quizzer has score 80', () => {
  const team = getFullTeam();
  team.getQuizzers()[0]?.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);

  expect(team.getScore(1).score).toBe(40);
  expect(team.getScore(2).score).toBe(60);
  expect(team.getScore(3).score).toBe(80);
  expect(team.getScore(q20BIndex).score).toBe(80);
});

test('team that is not on time and has 4 correct answers from a quizzer has score 80', () => {
  const team = getFullTeam(false);
  team.getQuizzers()[0]?.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(4, QuestionResult.CORRECT_ANSWER);

  expect(team.getScore(1).score).toBe(20);
  expect(team.getScore(2).score).toBe(40);
  expect(team.getScore(3).score).toBe(60);
  expect(team.getScore(4).score).toBe(80);
  expect(team.getScore(q20BIndex).score).toBe(80);
});

test('team that is on time and has 5 correct answers from 2 quizzers has score 120', () => {
  const team = getFullTeam();
  team.getQuizzers()[0]?.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(4, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(5, QuestionResult.CORRECT_ANSWER);

  expect(team.getScore(1).score).toBe(40);
  expect(team.getScore(2).score).toBe(60);
  expect(team.getScore(3).score).toBe(80);
  expect(team.getScore(4).score).toBe(100);
  expect(team.getScore(5).score).toBe(120);
  expect(team.getScore(q20BIndex).score).toBe(120);
});

test('team that is on time and has 8 correct answers from 2 quizzers has score 180', () => {
  const team = getFullTeam();
  team.getQuizzers()[0]?.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(4, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(5, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(6, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(7, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(8, QuestionResult.CORRECT_ANSWER);

  expect(team.getScore(1).score).toBe(40);
  expect(team.getScore(2).score).toBe(60);
  expect(team.getScore(3).score).toBe(80);
  expect(team.getScore(4).score).toBe(100);
  expect(team.getScore(5).score).toBe(120);
  expect(team.getScore(6).score).toBe(140);
  expect(team.getScore(7).score).toBe(160);
  expect(team.getScore(8).score).toBe(180);
  expect(team.getScore(q20BIndex).score).toBe(180);
});

test('team that is on time and has 6 correct answers from 2 quizzers and 2 incorrect from 2 quizzers has score 140', () => {
  const team = getFullTeam();
  team.getQuizzers()[0]?.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(4, QuestionResult.ERROR);
  team.getQuizzers()[1]?.addQuestionResult(5, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(6, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(7, QuestionResult.ERROR);
  team.getQuizzers()[1]?.addQuestionResult(8, QuestionResult.CORRECT_ANSWER);

  expect(team.getScore(1).score).toBe(40);
  expect(team.getScore(2).score).toBe(60);
  expect(team.getScore(3).score).toBe(80);
  expect(team.getScore(4).score).toBe(80);
  expect(team.getScore(5).score).toBe(100);
  expect(team.getScore(6).score).toBe(120);
  expect(team.getScore(7).score).toBe(120);
  expect(team.getScore(8).score).toBe(140);
  expect(team.getScore(q20BIndex).score).toBe(140);
});

test('team that is on time and has 6 correct answers from 2 quizzers and 2 incorrect from a quizzer has score 130', () => {
  const team = getFullTeam();
  team.getQuizzers()[0]?.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(3, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(4, QuestionResult.ERROR);
  team.getQuizzers()[1]?.addQuestionResult(5, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(6, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[1]?.addQuestionResult(7, QuestionResult.ERROR);
  team.getQuizzers()[1]?.addQuestionResult(8, QuestionResult.CORRECT_ANSWER);

  expect(team.getScore(1).score).toBe(40);
  expect(team.getScore(2).score).toBe(60);
  expect(team.getScore(3).score).toBe(80);
  expect(team.getScore(4).score).toBe(80);
  expect(team.getScore(5).score).toBe(100);
  expect(team.getScore(6).score).toBe(120);
  expect(team.getScore(7).score).toBe(110);
  expect(team.getScore(8).score).toBe(130);
  expect(team.getScore(q20BIndex).score).toBe(130);
});

test('team that is on time and has 3 correct answers from a quizzer and 3 incorrect from 3 quizzers has score 70', () => {
  const team = getFullTeam();
  team.getQuizzers()[0]?.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(3, QuestionResult.ERROR);
  team.getQuizzers()[1]?.addQuestionResult(4, QuestionResult.ERROR);
  team.getQuizzers()[0]?.addQuestionResult(5, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[2]?.addQuestionResult(6, QuestionResult.ERROR);

  expect(team.getScore(1).score).toBe(40);
  expect(team.getScore(2).score).toBe(60);
  expect(team.getScore(3).score).toBe(60);
  expect(team.getScore(4).score).toBe(60);
  expect(team.getScore(5).score).toBe(80);
  expect(team.getScore(6).score).toBe(70);
  expect(team.getScore(q20BIndex).score).toBe(70);
});

test('team that is on time and has 3 correct answers from a quizzer and 4 incorrect from 4 quizzers has score 60', () => {
  const team = getFullTeam();
  team.getQuizzers()[0]?.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(3, QuestionResult.ERROR);
  team.getQuizzers()[1]?.addQuestionResult(4, QuestionResult.ERROR);
  team.getQuizzers()[0]?.addQuestionResult(5, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[2]?.addQuestionResult(6, QuestionResult.ERROR);
  team.getQuizzers()[3]?.addQuestionResult(7, QuestionResult.ERROR);

  expect(team.getScore(1).score).toBe(40);
  expect(team.getScore(2).score).toBe(60);
  expect(team.getScore(3).score).toBe(60);
  expect(team.getScore(4).score).toBe(60);
  expect(team.getScore(5).score).toBe(80);
  expect(team.getScore(6).score).toBe(70);
  expect(team.getScore(7).score).toBe(60);
  expect(team.getScore(q20BIndex).score).toBe(60);
});

test('team that is on time and has 3 correct answers from a quizzer and 3 incorrect from 2 quizzers has score 70', () => {
  const team = getFullTeam();
  team.getQuizzers()[0]?.addQuestionResult(1, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(2, QuestionResult.CORRECT_ANSWER);
  team.getQuizzers()[0]?.addQuestionResult(3, QuestionResult.ERROR);
  team.getQuizzers()[1]?.addQuestionResult(4, QuestionResult.ERROR);
  team.getQuizzers()[0]?.addQuestionResult(5, QuestionResult.CORRECT_ANSWER);
  // 2nd individual and 3rd team error
  // this is only a 10-point deduction for the team
  team.getQuizzers()[0]?.addQuestionResult(6, QuestionResult.ERROR);

  expect(team.getScore(1).score).toBe(40);
  expect(team.getScore(2).score).toBe(60);
  expect(team.getScore(3).score).toBe(60);
  expect(team.getScore(4).score).toBe(60);
  expect(team.getScore(5).score).toBe(80);
  expect(team.getScore(6).score).toBe(70);
  expect(team.getScore(q20BIndex).score).toBe(70);
});
