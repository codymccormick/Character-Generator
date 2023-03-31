import { getRandomItemFromArray } from "../../../helpers/random";

export const generateChildhoodEnvironment = () => {
	return getRandomItemFromArray(childhoodEnvironments);
};

export const childhoodEnvironments = [
	{
		title: "No Adult Supervision",
		type: "Childhood Environment",
		description:
			"No one was around a majority of the time, or at all, to supervise. No real structure.",
	},
	{
		title: "Abusive",
		type: "Childhood Environment",
		description: "Your caretakers provided significant physical and/or mental abuse.",
	},
	{
		title: "Sheltered",
		type: "Childhood Environment",
		description:
			'You had constant supervision by adults or others, they kept you confined to "safe" areas.',
	},
	{
		title: "Supportive",
		type: "Childhood Environment",
		description: "You were provided guidance and care and allowed room to grow and explore.",
	},
	{
		title: "Gang",
		type: "Childhood Environment",
		description: "You were raised by a gang, band or other group.",
	},
	{
		title: "Strict",
		type: "Childhood Environment",
		description:
			"Most of your care was left up to monks, military schools or other strict institutions.",
	},
	{
		title: "Owned",
		type: "Childhood Environment",
		description: "You were put to work from early on or outright owned, very little care given.",
	},
	{
		title: "Apprenticed",
		type: "Childhood Environment",
		description: "You were given over to a Master to be apprenticed from an early age.",
	},
	{
		title: "Nomadic",
		type: "Childhood Environment",
		description:
			"You were part of a wandering tribe or caravan, constantly on the move and exposed to different cultures and environments.",
	},
	{
		title: "Orphanage",
		type: "Childhood Environment",
		description:
			"You were raised in an orphanage or group home, where resources may have been scarce, but you had a sense of community with other orphans.",
	},
	{
		title: "Hidden",
		type: "Childhood Environment",
		description:
			"You were hidden away from the world, perhaps for your own protection or because of a prophecy. You were raised in seclusion, away from society.",
	},
	{
		title: "Noble",
		type: "Childhood Environment",
		description:
			"Born into a noble or royal family, you were raised with wealth, privilege, and a strong sense of duty and responsibility.",
	},
	{
		title: "Feral",
		type: "Childhood Environment",
		description:
			"You were raised by animals or magical creatures, isolated from human or humanoid society, learning their ways and instincts.",
	},
	{
		title: "Cult",
		type: "Childhood Environment",
		description:
			"You were brought up within a secretive cult or religious sect, deeply ingrained with their beliefs and rituals.",
	},
	{
		title: "Magical Academy",
		type: "Childhood Environment",
		description:
			"You were enrolled in a magical academy or school for gifted individuals, where you were surrounded by the study of the arcane.",
	},
	{
		title: "Pirate Crew",
		type: "Childhood Environment",
		description:
			"You were raised by a pirate crew, sailing the seas and learning the ways of piracy and adventure.",
	},
	{
		title: "Criminal Family",
		type: "Childhood Environment",
		description:
			"You were born into a family with criminal connections, and you were exposed to the criminal underworld from an early age.",
	},
];
