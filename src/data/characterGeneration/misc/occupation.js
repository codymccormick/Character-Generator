import { generateRandomItemFromObject } from '../../../helpers/random';

export const generateOccupation = () => 
	generateRandomItemFromObject(occupations, 'occupation', 'occupationReason');

// Descriptions of character occupations and their origins
export const occupations = {
	Academic: [
		'Passionate about knowledge and research from a young age',
		'Inspired by a great teacher or mentor',
		'Wanted to follow in the footsteps of a family member who was an academic'
	],
	Adventurer: [
		'Craving for excitement and adrenaline rushes',
		'Love for exploring new and unknown places',
		'Following the footsteps of a famous adventurer they idolized'
	],
	Aristocrat: [
		'Inherited the family title and fortune',
		'Wanted to continue the family legacy and maintain their status',
		'Felt a sense of responsibility to use their privilege to help others'
	],
	Artisan: [
		'Naturally gifted with artistic skills from a young age',
		'Inspired by a particular work of art or artist',
		'Found fulfillment in creating beautiful and meaningful things'
	],
	'Guild Member': [
		'Wanted to join a particular guild that aligned with their values and interests',
		'Needed to learn a trade or skill to support their family',
		'Was born into a family of guild members and wanted to continue the tradition'
	],
	Criminal: [
		'Grew up in poverty and turned to crime as a means of survival',
		'Influenced by a bad crowd or family member',
		'Felt the thrill and power of breaking the law'
	],
	Entertainer: [
		'Naturally talented in singing, dancing, or acting',
		'Inspired by a particular performer they idolized',
		'Found joy in making people happy and forgetting their troubles'
	],
	Exile: [
		'Forced to leave their homeland due to political or personal reasons',
		'Refused to conform to societal norms and was exiled as a result',
		'Chose to leave voluntarily in search of a better life or adventure'
	],
	hermit: [
		'Traumatized by a past event and wanted to live in seclusion',
		'Prefers solitude and introspection over socializing',
		'Wanted to escape the pressures and stress of modern society'
	],
	Refugee: [
		'Fled their home country due to war, persecution, or natural disaster',
		'Was offered asylum in a new country',
		'Wanted to start a new life in a place with more opportunities and freedoms'
	],
	Explorer: [
		'Passionate about discovering new and unknown places',
		'Inspired by a particular explorer they idolized',
		'Wanted to challenge themselves and push their limits'
	],
	Wanderer: [
		'Wanted to experience new cultures and ways of life',
		'Felt restless and unsatisfied with their current situation',
		'Needed to escape a traumatic event or personal problem'
	],
	Farmer: [
		'Comes from a family of farmers and wanted to continue the tradition',
		'Felt a connection to nature and wanted to work with the land',
		'Wanted to provide food and sustenance for their community'
	],
	Herder: [
		'Grew up on a farm surrounded by animals and developed a deep love and understanding for them',
		'Feels a spiritual connection to nature and enjoys being outdoors',
		'Believes that herding is an important part of preserving traditional ways of life'
	],
	Hunter: [
		'Has always been fascinated by the wild and enjoys the thrill of the hunt',
		'Believes that hunting is an important part of controlling animal populations',
		'Is passionate about conservation and wants to ensure that wildlife is protected for future generations'
	],
	Trapper: [
		'Grew up learning trapping skills from family members',
		'Is fascinated by the challenge of outsmarting wild animals',
		'Believes that trapping is an important part of wildlife management'
	],
	Laborer: [
		'Comes from a family of blue-collar workers and is proud of their roots',
		'Believes that hard work is the key to success',
		'Enjoys the satisfaction of seeing a job well done'
	],
	Merchant: [
		'Has always had a knack for business and enjoys making deals',
		'Wants to provide for their family and build a legacy',
		'Is passionate about bringing new products and ideas to their community'
	],
	Politician: [
		'Is deeply committed to social justice and wants to make a difference in the world',
		'Has a natural charisma and enjoys persuading others to see their point of view',
		'Believes that government is the best way to effect positive change'
	],
	Bureaucrat: [
		'Is passionate about ensuring that laws are applied fairly and consistently',
		'Enjoys the challenge of navigating complex systems and regulations',
		'Believes that bureaucracy is a necessary part of a functioning society'
	],
	Priest: [
		'Feels called to serve a higher power and help others on their spiritual journeys',
		'Believes that religion can provide comfort and guidance to people in times of need',
		'Is passionate about promoting love and understanding among people of different faiths'
	],
	Sailor: [
		'Is drawn to the freedom and adventure of life at sea',
		'Enjoys the challenge of navigating difficult waters and weather conditions',
		'Believes that trade and commerce are important for building relationships between different cultures and nations'
	],
	Soldier: [
		'Is deeply committed to protecting their country and its people',
		'Enjoys the camaraderie and discipline of military life',
		'Believes that serving in the military is a noble and honorable profession'
	]
};
