import { getRandomItemFromArray } from "../../../helpers/random";

// Generates a random class from the classes array
export const generateClass = () => {
	return getRandomItemFromArray(classes);
};

// Array of potential classes
export const classes = [
	{
		title: "Barbarian",
		type: "Class",
		description:
			"A fierce warrior, harnessing their primal fury to become a powerful force in combat.",
	},
	{
		title: "Bard",
		type: "Class",
		description:
			"A versatile performer, skilled in both combat and the arcane arts, using their musical talents to inspire allies and manipulate the world around them.",
	},
	{
		title: "Cleric",
		type: "Class",
		description:
			"A divine spellcaster, channeling the power of their deity to heal, protect, and smite their enemies.",
	},
	{
		title: "Druid",
		type: "Class",
		description:
			"A spellcaster in tune with nature, wielding the powers of the natural world and even transforming into powerful beasts.",
	},
	{
		title: "Fighter",
		type: "Class",
		description: "A master of martial combat, proficient with a wide array of weapons and armor.",
	},
	{
		title: "Monk",
		type: "Class",
		description:
			"A disciplined martial artist, harnessing their inner strength and agility to perform incredible feats of combat and acrobatics.",
	},
	{
		title: "Paladin",
		type: "Class",
		description:
			"A holy warrior, combining divine magic and martial prowess to protect the innocent and vanquish evil.",
	},
	{
		title: "Ranger",
		type: "Class",
		description:
			"A skilled hunter and tracker, adept at navigating the wilderness and fighting with ranged and melee weapons.",
	},
	{
		title: "Rogue",
		type: "Class",
		description:
			"A cunning and agile combatant, excelling at stealth, deception, and finding the weak spots in their enemies' defenses.",
	},
	{
		title: "Sorcerer",
		type: "Class",
		description:
			"A spellcaster with innate magical abilities, channeling their raw arcane power to bend reality to their will.",
	},
	{
		title: "Warlock",
		type: "Class",
		description:
			"A spellcaster who has made a pact with a powerful otherworldly being, gaining access to potent and often dark magic.",
	},
	{
		title: "Wizard",
		type: "Class",
		description:
			"A scholarly spellcaster, dedicated to the study and mastery of arcane magic through careful research and practice.",
	},
];
