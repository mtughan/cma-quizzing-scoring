class Team {
  #score: number;

  constructor() {
    this.#score = 20;
  }

  getScore(): number {
    return this.#score;
  }
}

export default Team;
