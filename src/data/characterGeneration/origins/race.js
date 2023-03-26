import { getRandomItemFromArray } from "../../../helpers/random";

// Generates a random race from the races array
export const generateRace = () => {
  return getRandomItemFromArray(races);
}

export const races = [
	'Human',
	'Dwarf',
	'Elf',
	'Halfling',
	'Dragonborn',
	'Gnome',
	'Half-Elf',
	'Half-Orc',
	'Tiefling'
];

