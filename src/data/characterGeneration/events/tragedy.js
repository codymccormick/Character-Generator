// import { generateDisability } from './disability.js';
// import { generateEnemy } from "./enemy";

function randomInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateTragedy() {
	const tragedyRoll = randomInRange(5, 6);

	switch (true) {
		case tragedyRoll >= 1 && tragedyRoll <= 2:
			return {
				title: "Crippling Event",
				type: "Tragedy",
				description: "You suffer major harm that has a permanent effect.", //Roll on the Disability Table.,
				// disability: generateDisability(),
			};

		case tragedyRoll >= 3 && tragedyRoll <= 4:
			return {
				title: "Financial blow",
				type: "Tragedy",
				description: "You manage to lose all your gold/possessions.",
			};

		case tragedyRoll >= 5 && tragedyRoll <= 6:
			return {
				title: "Debt",
				type: "Tragedy",
				description: "Financial or otherwise, you make yourself indebted to someone or some group.",
				// enemy: generateEnemy(),
			};

		case tragedyRoll >= 7 && tragedyRoll <= 8:
			return {
				title: "Infamy",
				type: "Tragedy",
				description:
					"You are known, and reviled, in connection with some sort of disastrous event. You may, or may not, be innocent, but most anyone who knows of the event will treat you with disdain at best.",
			};

		case tragedyRoll >= 9 && tragedyRoll <= 10:
			return {
				title: "Crisis",
				type: "Tragedy",
				description: `You suffer a personal crisis (injury, addiction, arrest, etc.) that effectively incapacitates you for ${months} months.`,
				months: randomInRange(1, 12),
			};

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

		default:
			return null;
	}
}