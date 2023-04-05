import { getRandomItemFromArray, randomInRange } from "../../../helpers/random";
import { generateSibling } from "../family/siblings";

// Function to generate a random windfall from the windfalls array
export function generateWindfall() {
	return getRandomItemFromArray(windfalls)
}

// Array of potential windfalls
export const windfalls = [
	{
		title: "Financial Boon",
		type: "Windfall",
		description: "You nearly double your worth in lands and possessions",
	},
	{
		title: "Someone Owes You",
		type: "Windfall",
		description: "You managed to be at the right place and at the right time and someone owes you",
	},
	{
		title: "Fame",
		type: "Windfall",
		description: "Through your deeds, you manage to make a name for yourself locally",
	},
	{	
		// const sibling = generateSibling(),
		title: "Long Lost Someone",
		type: "Found a long lost sibling",
	    description: `You find a sibling you never knew you had.`, // ${sibling.birthOrder} ${sibling.gender}`,
	},
	{
		title: "Title",
		type: "Windfall",
		description: "You gain a title and lands.",
	},
	{
		title: "Travel",
		type: "Travel",
		description:`The opportunity arises to travel to far distant lands for ${randomInRange(1,12)} months.`,
	},
];
