import Quiz from './Quiz';
import Team from './Team';

test('quiz has 3 teams', () => {
  const quiz = new Quiz();

  const team1 = new Team('Team 1');
  const team2 = new Team('Team 2');
  const team3 = new Team('Team 3');

  quiz.setTeam(0, team1);
  quiz.setTeam(1, team2);
  quiz.setTeam(2, team3);

  const teams = quiz.getTeams();
  expect(teams[0]?.name).toBe('Team 1');
  expect(teams[1]?.name).toBe('Team 2');
  expect(teams[2]?.name).toBe('Team 3');
});

test('teams in invalid spots are rejected', () => {
  const quiz = new Quiz();
  const team = new Team('Team 1');

  expect(() => quiz.setTeam(-1, team)).toThrow();
  expect(() => quiz.setTeam(3, team)).toThrow();
  expect(() => quiz.setTeam(NaN, team)).toThrow();
});
