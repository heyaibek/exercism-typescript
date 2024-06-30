function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export class DnDCharacter {
  hitpoints: number = 0;
  strength: number = 0;
  dexterity: number = 0;
  constitution: number = 0;
  intelligence: number = 0;
  wisdom: number = 0;
  charisma: number = 0;

  public constructor() {
    this.strength = this.largest(this.roll4Dices());
    this.dexterity = this.largest(this.roll4Dices());
    this.constitution = this.largest(this.roll4Dices());
    this.intelligence = this.largest(this.roll4Dices());
    this.wisdom = this.largest(this.roll4Dices());
    this.charisma = this.largest(this.roll4Dices());
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    return getRandom(3, 18);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }

  private largest(points: Array<number>): number {
    points = points.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      sum += points[i];
    }
    return sum / 3;
  }

  private roll4Dices(): Array<number> {
    return [
      DnDCharacter.generateAbilityScore(),
      DnDCharacter.generateAbilityScore(),
      DnDCharacter.generateAbilityScore(),
      DnDCharacter.generateAbilityScore(),
    ];
  }
}
