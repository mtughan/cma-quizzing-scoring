import Team from './Team';

class Quiz {
  private static readonly MAX_TEAMS = 3;

  #teams: (Team | null)[];

  constructor() {
    this.#teams = [];
    this.#teams.length = Quiz.MAX_TEAMS;
    this.#teams.fill(null);
  }

  setTeam(index: number, team: Team): void {
    if (index < 0 || index >= this.#teams.length || Number.isNaN(index)) { // max 3 teams in a quiz
      throw new Error('index must be between 0 and 2!');
    }
    this.#teams[index] = team;
  }

  getTeams(): (Team | null)[] {
    return this.#teams.slice();
  }
}

export default Quiz;
