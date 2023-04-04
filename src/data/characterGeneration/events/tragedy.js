import { randomInRange } from "../../../helpers/random";
// import { generateDisability } from './disability.js';
// import { generateEnemy } from "./enemy";

// Function to generate a random tragedy event based on a roll value
export function generateTragedy() {
	// Generate a random roll value between 1 and 12
	const tragedyRoll = randomInRange(1, 12);

	// Determine the tragedy event based on the roll value
	switch (true) {
		// Roll 1-2: Crippling Event
		case tragedyRoll >= 1 && tragedyRoll <= 2:
			return {
				title: "Crippling Event",
				type: "Tragedy",
				description: "You suffer major harm that has a permanent effect.", //Roll on the Disability Table.,
				// disability: generateDisability(),
			};

		// Roll 3-4: Financial blow
		case tragedyRoll >= 3 && tragedyRoll <= 4:
			return {
				title: "Financial blow",
				type: "Tragedy",
				description: "You manage to lose all your gold/possessions.",
			};

		// Roll 5-6: Debt
		case tragedyRoll >= 5 && tragedyRoll <= 6:
			return {
				title: "Debt",
				type: "Tragedy",
				description: "Financial or otherwise, you make yourself indebted to someone or some group.",
				// enemy: generateEnemy(),
			};

		// Roll 7-8: Infamy
		case tragedyRoll >= 7 && tragedyRoll <= 8:
			return {
				title: "Infamy",
				type: "Tragedy",
				description:
					"You are known, and reviled, in connection with some sort of disastrous event. You may, or may not, be innocent, but most anyone who knows of the event will treat you with disdain at best.",
			};

		// Roll 9-10: Crisis
		case tragedyRoll >= 9 && tragedyRoll <= 10:
			return {
				title: "Crisis",
				type: "Tragedy",
				description: `You suffer a personal crisis (injury, addiction, arrest, etc.) that effectively incapacitates you for ${randomInRange(
					1,
					12
				)} months.`,
			};

		// Roll 11-12: Lose a Loved One
		case tragedyRoll >= 11 && tragedyRoll <= 12:
			const lovedOneStatus = randomInRange(1, 6);
			let statusDescription = "";
			if (lovedOneStatus >= 1 && lovedOneStatus <= 2) {
				statusDescription = "Dies";
			} else if (lovedOneStatus >= 3 && lovedOneStatus <= 4) {
				statusDescription = "Leaves";
			} else {
				statusDescription = "Is taken";
			}
			return {
				title: "Lose a Loved One",
				type: "Tragedy",
				description: `Someone very close to you ${statusDescription}.`,
			};

		// If no matching case, return null
		default:
			return null;
	}
}
