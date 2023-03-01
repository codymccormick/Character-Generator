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