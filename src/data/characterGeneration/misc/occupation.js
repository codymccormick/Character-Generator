import { getRandomItemFromArray } from "../../../helpers/random";

export const generateOccupation = () => {
	return getRandomItemFromArray(occupations);
};

export const occupations = [
	{
		title: "Academic",
		type: "Occupation",
		description: "A scholar or researcher engaged in the pursuit of knowledge.",
	},
	{
		title: "Adventurer",
		type: "Occupation",
		description: "A brave explorer seeking fame, fortune, or both through quests and exploration.",
	},
	{
		title: "Aristocrat",
		type: "Occupation",
		description: "A member of the nobility, enjoying wealth, power, and influence.",
	},
	{
		title: "Artisan",
		type: "Occupation",
		description: "A skilled craftsman who creates and sells handcrafted goods.",
	},
	{
		title: "Guild Member",
		type: "Occupation",
		description:
			"A member of an organized group of professionals, united by a common trade or craft.",
	},
	{
		title: "Criminal",
		type: "Occupation",
		description: "An individual involved in illegal activities for personal gain.",
	},
	{
		title: "Entertainer",
		type: "Occupation",
		description: "A performer skilled in providing amusement or diversion for an audience.",
	},
	{
		title: "Exile",
		type: "Occupation",
		description: "A person banished from their homeland, living as an outsider in a foreign land.",
	},
	{
		title: "Hermit",
		type: "Occupation",
		description: "A person living in seclusion, often for religious or spiritual reasons.",
	},
	{
		title: "Refugee",
		type: "Occupation",
		description:
			"A person forced to flee their homeland due to war, persecution, or natural disaster.",
	},
	{
		title: "Explorer",
		type: "Occupation",
		description:
			"A daring individual who ventures into uncharted territories, seeking new discoveries.",
	},
	{
		title: "Wanderer",
		type: "Occupation",
		description: "A person who roams from place to place without a fixed home or occupation.",
	},
	{
		title: "Farmer",
		type: "Occupation",
		description:
			"A person who cultivates land and raises crops or livestock for sustenance or profit.",
	},
	{
		title: "Herder",
		type: "Occupation",
		description:
			"A person who tends to and manages a group of domesticated animals, such as sheep or cattle.",
	},
	{
		title: "Hunter",
		type: "Occupation",
		description: "A person who tracks and kills wild animals for food, sport, or trade.",
	},
	{
		title: "Trapper",
		type: "Occupation",
		description:
			"A person who captures animals using traps, primarily for their fur or other valuable resources.",
	},
	{
		title: "Laborer",
		type: "Occupation",
		description:
			"A person who performs manual labor, often in construction, manufacturing, or agriculture.",
	},
	{
		title: "Merchant",
		type: "Occupation",
		description:
			"A person who buys and sells goods for profit, often traveling to trade with others.",
	},
	{
		title: "Politician",
		type: "Occupation",
		description:
			"An individual involved in the governance of a region, making decisions that affect its citizens.",
	},
	{
		title: "Bureaucrat",

		type: "Occupation",
		description:
			"A person who works within a government or organization, managing its rules, regulations, and procedures.",
	},
	{
		title: "Priest",
		type: "Occupation",
		description:
			"A religious leader who serves a deity or deities and guides the spiritual lives of their followers.",
	},
	{
		title: "Sailor",
		type: "Occupation",
		description: "A person who works on a ship, navigating and maintaining it for travel or trade.",
	},
	{
		title: "Soldier",
		type: "Occupation",
		description:
			"A person who serves in an army, trained to fight in combat and defend their nation or cause.",
	},
];
