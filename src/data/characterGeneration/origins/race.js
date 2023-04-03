import { getRandomItemFromArray } from "../../../helpers/random";

// Generates a random race from the races array
export const generateRace = () => {
	return getRandomItemFromArray(races);
};

// Array of potential races
export const races = [
	{
		title: "Human",
		type: "Race",
		description:
			"Humans are the most adaptable, flexible, and ambitious people among the common races. They are diverse in their customs, culture, and physical appearance.",
	},
	{
		title: "Dwarf",
		type: "Race",
		description:
			"Dwarves are a stout and sturdy race known for their resilience, craftsmanship, and strong connection to their ancestral traditions.",
	},
	{
		title: "Elf",
		type: "Race",
		description:
			"Elves are a graceful and magical race, known for their longevity, deep connection with nature, and inherent aptitude for arcane arts.",
	},
	{
		title: "Halfling",
		type: "Race",
		description:
			"Halflings are a small, nimble, and resourceful race known for their adaptability and strong sense of community.",
	},
	{
		title: "Dragonborn",
		type: "Race",
		description:
			"Dragonborn are a proud and powerful race with draconic heritage, known for their strong convictions and ability to harness the power of dragons.",
	},
	{
		title: "Gnome",
		type: "Race",
		description:
			"Gnomes are a small and inventive race, known for their curiosity, wit, and affinity for illusion magic.",
	},
	{
		title: "Half-Elf",
		type: "Race",
		description:
			"Half-Elves are a versatile and adaptable race, born from the union of humans and elves, often finding themselves at home in both cultures.",
	},
	{
		title: "Half-Orc",
		type: "Race",
		description:
			"Half-Orcs are a strong and resilient race, born from the union of humans and orcs, often struggling to find acceptance in either culture.",
	},
	{
		title: "Tiefling",
		type: "Race",
		description:
			"Tieflings are a race with infernal heritage, known for their cunning, natural affinity for arcane magic, and ability to overcome adversity.",
	},
];
