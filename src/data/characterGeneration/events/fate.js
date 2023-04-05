import { generateTragedy } from "./tragedy.js";
import { generateWindfall } from "./windfall.js";
import { generateFriend } from "../relationships/friend.js";
import { generateEnemy } from "../relationships/enemy.js";
import { generateLoveEvents } from "./love";
// import { generateImprovement } from './personalImprovement.js';

// Function to generate life events
export function generateLifeEvents() {
	// Determine the number of life events to generate
	const lifeEvents = Math.floor(Math.random() * 4) + 4;
	const events = [];

	for (let i = 0; i < lifeEvents; i++) {
		// Generate a random fate roll value between 1 and 12
		const fateRoll = Math.floor(Math.random() * 12) + 1;
		let event;

		// Determine the life event based on the roll value
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
				event = generateLoveEvents();
				break;
			case 11:
			case 12:
				event = generateFriend(); // This is a placeholder until i implement generateImprovment()
				// event = "Improvment" //generateImprovement();
				break;
		}

		// Add the generated event to the events array
		events.push(event);
	}

	// Return the generated events array
	return events;
}
