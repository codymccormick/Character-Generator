import { getRandomItemFromArray } from "../../../helpers/random";

// Generates a random birthplace with a reason
export const generateBirthplace = () => {
	return getRandomItemFromArray(birthplaces);
};

export const birthplaces = [
	"You were born in a secluded cave, far from the prying eyes of the world.",
	"You were born in a field, under the open sky.",
	"You were born in a dense forest, surrounded by nature.",
	"You were born in the warmth and comfort of your own home.",
	"You were born in the home of a family friend",
	"You were born in the home of a healer or midwife",
	"You were born in a dimly lit alley",
	"You were born in a rustic barn or shed.",
	"You were born within the sultry walls of a brothel.",
	"You were born in a bustling tavern or inn",
	"You were born within the grand walls of a castle",
	"You were born in a sturdy keep",
	"You were born in the dank depths of a sewer",
	"You were born on board a ship admist the endless expanse of the sea",
	"You were born within the confines of a prison",
	"You were born in the headquarters of a secret orginaization",
	"You were born in a small hamlet or village, isolated from any kingdom and not found on any map.",
	"You were born amongst slaves, living a life of hardship and oppression.",
	"You were born in a medium-sized town, part of a kingdom and usually found on a map or within a scholarly institution.",
	"You were born in a monastery, university, or a similar religious setting.",
	"You were born in a fortress, a structure built for military use and protection.",
	"You were born in a palace, the place of residence for a royal family.",
	"You were born in a major metropolis, a sprawling conglomeration of residences and businesses, always found on a map.",
	"You were born on the move, within a nomadic caravan, on a ship, or maybe even as part of a traveling circus.",
	"You were raised by another race or species in a city primarily inhabited by them.",
	"You were born in the dark and gloomy realm of the Shadowfell, where shadows and despair hold sway.",
	"You were born in the magical realm of the Feywild, a place of wonder, beauty, and danger.",
	"You were born in a hidden sanctuary, protected by powerful magic and inhabited by magical creatures.",
	"You were born in a seaside village, with a strong connection to the ocean and marine life.",
	"You were born in a small settlement near a desert oasis, where the harsh climate shaped your upbringing.",
	"You were born in a secret arcane laboratory, where magical experiments and discoveries were made.",
	"You were born within a holy temple, dedicated to a specific deity or pantheon of gods.",
	"You were born in the ruins of an ancient civilization, surrounded by the remnants of a lost society.",
	"You were born on a battlefield, amidst the chaos and strife of war.",
];
