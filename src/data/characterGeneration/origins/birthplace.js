import { generateRandomItemFromObject } from '../../../helpers/random';

// Generates a random birthplace with a reason
export const generateBirthplace = () => {
	return generateRandomItemFromObject(birthplaces, 'birthplace', 'birthplaceReason');
};

export const birthplaces = {
    'Out in the Wilderness': [
        'You were born in a cave, hidden away from the world.',
        'You were born in a field, under the open sky.',
        'You were born in a dense forest, surrounded by nature.'
    ],
    'A Rural Hamlet/Village': [
        'You were born in a small hamlet or village, isolated from any kingdom and not found on any map.'
    ],
    'Slave Pit': [
        'You were born amongst slaves, living a life of hardship and oppression.'
    ],
    'Town': [
        'You were born in a medium-sized town, part of a kingdom and usually found on a map or within a scholarly institution.'
    ],
    'Religious': [
        'You were born in a monastery, university, or a similar religious setting.'
    ],
    'Fortress': [
        'You were born in a fortress, a structure built for military use and protection.'
    ],
    'Palace': [
        'You were born in a palace, the place of residence for a royal family.'
    ],
    'Major Metropolis': [
        'You were born in a major metropolis, a sprawling conglomeration of residences and businesses, always found on a map.'
    ],
    'Caravan or Other Mobile': [
        'You were born on the move, within a nomadic caravan, on a ship, or maybe even as part of a traveling circus.'
    ],
    'Alien Racial City': [
        'You were raised by another race or species in a city primarily inhabited by them.'
    ],
    'Extraplanar': [
        'You were born in the dark and gloomy realm of the Shadowfell, where shadows and despair hold sway.',
        'You were born in the magical realm of the Feywild, a place of wonder, beauty, and danger.'
    ],
    'Magical Sanctuary': [
        'You were born in a hidden sanctuary, protected by powerful magic and inhabited by magical creatures.'
    ],
    'Coastal Village': [
        'You were born in a seaside village, with a strong connection to the ocean and marine life.'
    ],
    'Desert Oasis': [
        'You were born in a small settlement near a desert oasis, where the harsh climate shaped your upbringing.'
    ],
    'Arcane Laboratory': [
        'You were born in a secret arcane laboratory, where magical experiments and discoveries were made.'
	],
	'Temple': [
		'You were born within a holy temple, dedicated to a specific deity or pantheon of gods.'
	],
	'Abandoned Ruins': [
		'You were born in the ruins of an ancient civilization, surrounded by the remnants of a lost society.'
	],
	'On the Battlefield': ['You were born on a battlefield, amidst the chaos and strife of war.'],
};
