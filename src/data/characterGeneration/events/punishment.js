import { getRandomItemFromArray } from "../../../helpers/random";

// Generate a random punishment from the punishments array
export const generatePunishment = () => {
	return getRandomItemFromArray(punishments);
};

// Array of potential punishments
export const punishments = [
	{
		title: "Exonerated",
		type: "Punishment",
		description: "You did not commit the crime and were exonerated after being accused.",
	},
	{
		title: "Found Not Guilty",
		type: "Punishment",
		description:
			"You committed the crime or helped do so, but nonetheless the authorities found you not guilty.",
	},
	{
		title: "Wanted",
		type: "Punishment",
		description:
			"You were nearly caught in the act. You had to flee and are wanted in the community where the crime occurred.",
	},
	{
		title: "Convicted",
		type: "Punishment",
		description:
			"You were caught and convicted. You spent time in jail, chained to an oar, or performing hard labor. You served a sentence of 1d4 years or succeeded in escaping after that much time.",
	},
];
