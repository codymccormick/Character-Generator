import { randomInRange } from './random';

export function rollDie(sides) {
  return randomInRange(1, sides);
}