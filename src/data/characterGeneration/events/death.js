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
		description: "Anything from a simple cold to a Pox caused death",
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
		title: "Occupational Accident" ,
		type: "Death",
		description: "Accident related to class or occupation",
	},
	{
		title: "Killed in battle",
		type: "Death",
		description: "Killed in battle",
	},
	{
		title: "Natural causes",
		type: "Death",
		description: "Natural causes, such as disease or old age",
	},
	{
		title: "Executed for a crime",
		type: "Death",
		description: "Executed for a crime",
	},
];
