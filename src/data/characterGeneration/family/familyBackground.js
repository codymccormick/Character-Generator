import { getRandomItemFromArray } from "../../../helpers/random";

// Generates a random family background and reason by selecting a random item from the familyBackgrounds array
export const generateFamilyBackground = () => getRandomItemFromArray(familyBackgrounds);

// Array of objects that define different family backgrounds
export const familyBackgrounds = [
	{
		title: "Homeless",
		type: "Family Background",
		description: "Surviving on their wits and resourcefulness",
	},
	{
		title: "Entertainers",
		type: "Family Background",
		description: "Acrobats, Jugglers, Circus Performers",
	},
	{
		title: "Serfs/Servants",
		type: "Family Background",
		description: "Working in a rich merchant's household",
	},
	{
		title: "Free Laborers",
		type: "Family Background",
		description: "Lumberjacks, Miners, Hunters",
	},
	{
		title: "Monks or Scholars",
		type: "Family Background",
		description: "Apprenticed to a wise hermit or sage",
	},
	{
		title: "Military",
		type: "Family Background",
		description: "Career soldiers or mercenaries",
	},
	{
		title: "Tradesman",
		type: "Family Background",
		description: "Ran a small shop or business in town",
	},
	{
		title: "Guild",
		type: "Family Background",
		description: "Alchemists, Herbalists, or Apothecaries",
	},
	{
		title: "Merchant",
		type: "Family Background",
		description: "Owned a successful trading company",
	},
	{
		title: "Minor Noble",
		type: "Family Background",
		description: "Landed gentry with a small estate",
	},
	{
		title: "Major Noble",
		type: "Family Background",
		description: "Known for their family's exceptional talents or abilities",
	},
	{
		title: "Royalty",
		type: "Family Background",
		description: "Raised in a luxurious palace or castle",
	},
	{
		title: "Explorers and Adventurers",
		type: "Family Background",
		description: "Raised in a family with a thirst for discovery",
	},
	{
		title: "Mystics and Seers",
		type: "Family Background",
		description: "Learned the secrets of the arcane arts from family members",
	},
	{
		title: "Pirates and Smugglers",
		type: "Family Background",
		description: "Grew up among a crew of pirates or smugglers",
	},
	{
		title: "Outcasts and Exiles",
		type: "Family Background",
		description: "Family carries a dark secret or curse",
	},
];
