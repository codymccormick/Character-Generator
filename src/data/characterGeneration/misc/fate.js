import { generateTragedy } from './tragedy.js';
import { generateWindfall } from './windfall.js';
import { generateFriend } from './friend.js';
import { generateEnemy } from './enemy.js';
import { generateCupidStrikes } from './cupidStrikes.js';
// Import the required functions from other files
// import { generateImprovement } from './personalImprovement.js';

export function generateFateEvents() {
  const eventfulYears = Math.floor(Math.random() * 4) + 4;
  const events = [];

  for (let i = 0; i < eventfulYears; i++) {
    const fateRoll = Math.floor(Math.random() * 12) + 1;
    let event;

    switch (fateRoll) {
      case 1:
      case 2:
        event = generateTragedy();
        break;
      case 3:
      case 4:
        event = generateWindfall();
        break;
      case 5:
      case 6:
        event = generateFriend();
        break;
      case 7:
      case 8:
        event = generateEnemy();
        break;
      case 9:
      case 10:
        event = generateCupidStrikes();
        break;
      case 11:
      case 12:
        event = generateFriend(); // This is a placeholder until i implement generateImprovment()
        // event = "Improvment" //generateImprovement();
        break;
    }

    events.push(event);
  }

  return events;
}
