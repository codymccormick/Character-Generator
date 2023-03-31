import { getRandomItemFromArray } from "../../../helpers/random";

// Generates a random birthplace with a reason
export const generateBirthplace = () => {
	return getRandomItemFromArray(birthplaces);
};

export const birthplaces = [
	{
		title: "Secluded Cave",
		type: "Birthplace",
		description: "You were born in a secluded cave, far from the prying eyes of the world."
	},
	{
		title: "Open Field",
		type: "Birthplace",
		description: "You were born in a field, under the open sky."
	},
	{
		title: "Dense Forest",
		type: "Birthplace",
		description: "You were born in a dense forest, surrounded by nature."
	},
	{
		title: "Family Home",
		type: "Birthplace",
		description: "You were born in the warmth and comfort of your own home."
	},
	{
		title: "Family Friend's Home",
		type: "Birthplace",
		description: "You were born in the home of a family friend."
	},
	{
		title: "Healer's Home",
		type: "Birthplace",
		description: "You were born in the home of a healer or midwife."
	},
	{
		title: "Dimly Lit Alley",
		type: "Birthplace",
		description: "You were born in a dimly lit alley."
	},
	{
		title: "Rustic Barn",
		type: "Birthplace",
		description: "You were born in a rustic barn or shed."
	},
	{
		title: "Brothel",
		type: "Birthplace",
		description: "You were born within the sultry walls of a brothel."
	},
	{
		title: "Tavern",
		type: "Birthplace",
		description: "You were born in a bustling tavern or inn."
	},
	{
		title: "Castle",
		type: "Birthplace",
		description: "You were born within the grand walls of a castle."
	},
	{
		title: "Sturdy Keep",
		type: "Birthplace",
		description: "You were born in a sturdy keep."
	},
	{
		title: "Dank Sewer",
		type: "Birthplace",
		description: "You were born in the dank depths of a sewer."
	},
	{
		title: "Ship",
		type: "Birthplace",
		description: "You were born on board a ship amidst the endless expanse of the sea."
	},
	{
		title: "Prison",
		type: "Birthplace",
		description: "You were born within the confines of a prison."
	},
	{
		title: "Secret Organization HQ",
		type: "Birthplace",
		description: "You were born in the headquarters of a secret organization."
	},
	{
		title: "Secluded Hamlet",
		type: "Birthplace",
		description: "You were born in a small hamlet or village, isolated from any kingdom and not found on any map."
	},
	{
		title: "Slave Community",
		type: "Birthplace",
		description: "You were born amongst slaves, living a life of hardship and oppression."
	},
	{
		title: "Medium-sized Town",
		type: "Birthplace",
		description: "You were born in a medium-sized town, part of a kingdom and usually found on a map or within a scholarly institution."
	},
	{
		title: "Religious Setting",
		type: "Birthplace",
		description: "You were born in a monastery, university, or a similar religious setting."
	},
	{
		title: "Fortress",
		type: "Birthplace",
		description: "You were born in a fortress, a structure built for military use and protection."
	},
	{
		title: "Palace",
		type: "Birthplace",
		description: "You were born in a palace, the place of residence for a royal family."
	},
	{
		title: "Major Metropolis",
		type: "Birthplace",
		description: "You were born in a major metropolis, a sprawling conglomeration of residences and businesses, always found on a map."
	},
	{
		title: "Nomadic Life",
		type: "Birthplace",
		description: "You were born on the move, within a nomadic caravan, on a ship, or maybe even as part of a traveling circus."
	},
	{
		title: "Other Race's City",
		type: "Birthplace",
		description: "You were raised by another race or species in a city primarily inhabited by them."
	},
	{
		title: "Shadowfell",
		type: "Birthplace",
		description: "You were born in the dark and gloomy realm of the Shadowfell, where shadows and despair hold sway."
	},
	{
		title: "Feywild",
		type: "Birthplace",
		description: "You were born in the magical realm of the Feywild, a place of wonder, beauty, and danger."
	},
	{
		title: "Hidden Sanctuary",
		type: "Birthplace",
		description: "You were born in a hidden sanctuary, protected by powerful magic and inhabited by magical creatures."
	},
	{
		title: "Seaside Village",
		type: "Birthplace",
		description: "You were born in a seaside village, with a strong connection to the ocean and marine life."
	},
	{
		title: "Desert Oasis",
		type: "Birthplace",
		description: "You were born in a small settlement near a desert oasis, where the harsh climate shaped your upbringing."
	},
	{
		title: "Arcane Laboratory",
		type: "Birthplace",
		description: "You were born in a secret arcane laboratory, where magical experiments and discoveries were made."
	},
	{
		title: "Holy Temple",
		type: "Birthplace",
		description: "You were born within a holy temple, dedicated to a specific deity or pantheon of gods."
	},
	{
		title: "Ancient Ruins",
		type: "Birthplace",
		description: "You were born in the ruins of an ancient civilization, surrounded by the remnants of a lost society."
	},
	{
		title: "Battlefield",
		type: "Birthplace",
		description: "You were born on a battlefield, amidst the chaos and strife of war."
	},
	
];
