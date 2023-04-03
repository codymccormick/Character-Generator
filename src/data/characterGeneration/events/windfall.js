import { randomInRange } from "../../../helpers/random";
import { generateSibling } from "../family/siblings";

// Function to generate a random windfall event based on a roll value
export function generateWindfall() {
	// Generate a random roll value between 1 and 12
	const windfallRoll = randomInRange(1, 12);

	// Determine the windfall event based on the roll value
	switch (true) {
		// Roll 1-2: Financial Boon
		case windfallRoll >= 1 && windfallRoll <= 2:
			return {
				title: "Financial Boon",
				type: "Windfall",
				description: "You nearly double your worth in lands and possessions",
			};
		// Roll 3-4: Someone Owes You
		case windfallRoll >= 3 && windfallRoll <= 4:
			return {
				title: "Someone Owes You",
				type: "Windfall",
				description:
					"You managed to be at the right place and at the right time and someone owes you",
			};
		// Roll 5-6: Fame
		case windfallRoll >= 5 && windfallRoll <= 6:
			return {
				title: "Fame",
				type: "Windfall",
				description: "Through your deeds, you manage to make a name for yourself locally",
			};
		// Roll 7-8: Long Lost Someone
		case windfallRoll >= 7 && windfallRoll <= 8:
			const sibling = generateSibling();
			return {
				title: "Long Lost Someone",
				type: "Found a long lost sibling",
				description: `You find a sibling you never knew you had. ${sibling.birthOrder} ${sibling.gender}`,
				sibling,
			};
		// Roll 9-10: Title
		case windfallRoll >= 9 && windfallRoll <= 10:
			return {
				title: "Title",
				type: "Windfall",
				description: "You gain a title and lands.",
			};
		// Roll 11-12: Travel
		case windfallRoll >= 11 && windfallRoll <= 12:
			const months = randomInRange(1, 12);
			return {
				title: "Travel",
				type: "Travel",
				description: `The opportunity arises to travel to far distant lands for ${months} months.`,
				months,
			};
		// If no matching case, return null
		default:
			return null;
	}
}
