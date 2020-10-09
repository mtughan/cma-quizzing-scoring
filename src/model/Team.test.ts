import Team from './Team';

test('score with no questions answered is 20', () => {
  const team = new Team();
  expect(team.getScore()).toBe(20);
});
