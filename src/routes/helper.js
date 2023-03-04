export const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function rollStat() {
    const rolls = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    rolls.sort((a, b) => a - b);
    return rolls[1] + rolls[2] + rolls[3];
  }

  export function generateAge() {
    let age;
    const ageBounds = [
      { min: 10, max: 20 },
      { min: 21, max: 30 },
      { min: 31, max: 40 },
      { min: 41, max: 50 },
      { min: 51, max: 60 },
      { min: 61, max: 100 }
    ];
    
    const roll = Math.floor(Math.random() * 91) + 10;
    const ageRange = ageBounds.find(({ max }) => roll <= max);
    if (ageRange) {
      age = randomInRange(ageRange.min, ageRange.max);
    }
    return age;
  }