import { generateRandomItemFromObject } from '../../../helpers/random';

// Generates a random childhood environment with a reason
export const generateChildhoodEnvironment = () => {
	return generateRandomItemFromObject(
		childhoodEnvironments,
		'childhoodEnvironment',
		'childhoodEnvironmentReason'
	);
};

export const childhoodEnvironments = {
	'No Adult Supervision': [
		'No one was around a majority of the time, or at all, to supervise. No real structure.'
	],
	Abusive: [
		'Your caretakers provided significant physical and/or mental abuse'
	],
	Sheltered: [
		'You had constant supervision by adults or others, they kept you confined to "safe" areas.'
	],
	Supportive: [
		'You were provided guidance and care and allowed room to grow and explore'
	],
	Gang: [
		'You were raised by a gang, band or other group'
	],
	Strict: [
		'Most of your care was left up to monks, military schools or other strict institutions'
	],
	Owned: [
		'You were put to work from early on or outright owned, very little care given'
	],
	Apprenticed: [
		'You were given over to a Master to be apprenticed from an early age'
	],
	Nomadic: [
		'You were part of a wandering tribe or caravan, constantly on the move and exposed to different cultures and environments.'
	],
	Orphanage: [
		'You were raised in an orphanage or group home, where resources may have been scarce, but you had a sense of community with other orphans.'
	],
	Hidden: [
		'You were hidden away from the world, perhaps for your own protection or because of a prophecy. You were raised in seclusion, away from society.'
	],
	Noble: [
		'Born into a noble or royal family, you were raised with wealth, privilege, and a strong sense of duty and responsibility.'
	],
	Feral: [
		'You were raised by animals or magical creatures, isolated from human or humanoid society, learning their ways and instincts.'
	],
	Cult: [
		'You were brought up within a secretive cult or religious sect, deeply ingrained with their beliefs and rituals.'
	],
	'Magical Academy': [
		'You were enrolled in a magical academy or school for gifted individuals, where you were surrounded by the study of the arcane.'
	],
	'Pirate Crew': [
		'You were raised by a pirate crew, sailing the seas and learning the ways of piracy and adventure.'
	],
	'Criminal Family': [
		'You were born into a family with criminal connections, and you were exposed to the criminal underworld from an early age.'
	]
};
