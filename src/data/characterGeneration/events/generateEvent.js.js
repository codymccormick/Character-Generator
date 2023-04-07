import { generateWindfall } from "./windfall.js";
import { generateFriend } from "../relationships/friend.js";
import { generateEnemy } from "../relationships/enemy.js";
import { generateLoveEvents } from "./love";
import { generateMisfortune } from "./misfortune.js";
import { generateCrime } from "./crime.js";
// import { generateImprovement } from './personalImprovement.js';

const eventFunctions = [
	generateMisfortune,
	generateWindfall,
	generateFriend,
	generateEnemy,
	generateLoveEvents,
	generateCrime,
];

// Function to generate life events
export function generateLifeEvents() {
	// Determine the number of life events to generate
	const lifeEvents = Math.floor(Math.random() * 4) + 4;
	const events = [];

	for (let i = 0; i < lifeEvents; i++) {
		// Generate a random index to choose an event function
		const index = Math.floor(Math.random() * eventFunctions.length);
		const eventFunction = eventFunctions[index];

		// Call the chosen event function to generate the event
		const event = eventFunction();

		// Add the generated event to the events array
		events.push(event);
	}

	// Return the generated events array
	return events;
}
