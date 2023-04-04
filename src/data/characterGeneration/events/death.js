import { getRandomItemFromArray } from "../../../helpers/random";

// Generates a random death from the death array
export const generateDeath = () => {
	return getRandomItemFromArray(deaths);
};

// Array of potential deaths
export const deaths = [
	{
		title: "Raid or Siege",
		type: "Death",
		description: "An event ranging from a raid to a siege caused death",
	},
	{
		title: "Illness",
		type: "Death",
		description: "Anything from a simple cold to a plauge caused death",
	},
	{
		title: "Random Event",
		type: "Death",
		description: "Any number of random events, from a mule kicking at the wrong time to a fire",
	},
	{
		title: "Known Murderer",
		type: "Death",
		description: "Murdered and You know who did it",
	},
	{
		title: "Unknown Murderer",
		type: "Death",
		description: "Murdered and you do not know who did it",
	},
	{
		title: "Mysterious Circumstances",
		type: "Death",
		description: "Found dead under mysterious circumstances",
	},
	{
		title: "Self-committed Murder",
		type: "Death",
		description: "Murdered by You",
	},
	{
		title: "Occupational Accident",
		type: "Death",
		description: "Accident related to occupation",
	},
	{
		title: "Killed in battle",
		type: "Death",
		description: "Death caused by injuries sustained in battle",
	},
	{
		title: "Natural causes",
		type: "Death",
		description: "Natural causes, such as disease or old age",
	},
	{
		title: "Executed for a crime",
		type: "Death",
		description: "Death by execution as punishment for a crime",
	},
	{
		title: "Wild Animal Attack",
		type: "Death",
		description: "Death caused by an attack from a wild animal",
	},
	{
		title: "Magical Mishap",
		type: "Death",
		description: "Death caused by a magical experiment gone awry or a cursed item",
	},
	{
		title: "Falling Accident",
		type: "Death",
		description: "Death caused by a fall from a great height",
	},
	{
		title: "Drowning",
		type: "Death",
		description: "Death caused by drowning in water or another liquid",
	},
	{
		title: "Poisoning",
		type: "Death",
		description: "Death caused by the ingestion, inhalation, or contact with a poisonous substance",
	},
	{
		title: "Divine Retribution",
		type: "Death",
		description: "Death caused by the wrath of a deity or divine force",
	},
	{
		title: "Natural Disaster",
		type: "Death",
		description: "Death caused by a natural disaster, such as a flood, earthquake, or storm",
	},
];
