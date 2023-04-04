import { randomInRange, getRandomItemFromArray } from "../../../helpers/random";
// import { generateDisability } from './disability.js';
// import { generateEnemy } from "./enemy";

// Function to generate a random tragedy event based on a roll value
export function generateTragedy() {
	return getRandomItemFromArray(tragedies);
}

export const tragedies = [
	{
		title: "Crippling Event",
		type: "Tragedy",
		description: "You suffer major harm that has a permanent effect.", //Roll on the Disability Table.,
		// disability: generateDisability(),
	},
	{
		title: "Financial blow",
		type: "Tragedy",
		description: "You manage to lose all your gold/possessions.",
	},
	{
		title: "Debt",
		type: "Tragedy",
		description: "Financial or otherwise, you make yourself indebted to someone or some group.",
		// enemy: generateEnemy(),
	},
	{
		title: "Infamy",
		type: "Tragedy",
		description:
			"You are known, and reviled, in connection with some sort of disastrous event. You may, or may not, be innocent, but most anyone who knows of the event will treat you with disdain at best.",
	},
	{
		title: "Crisis",
		type: "Tragedy",
		description: `You suffer a personal crisis (injury, addiction, arrest, etc.) that effectively incapacitates you for ${randomInRange(1,12)} months.`,
	},
	{
		title: "Lose a Loved One",
		type: "Tragedy",
		description: `Someone very close to you ` //${statusDescription}.`,
	},
];
